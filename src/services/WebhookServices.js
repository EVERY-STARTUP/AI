"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const logs_1 = __importDefault(require("../logs"));
const ServiceErrorHandler_1 = require("./ServiceErrorHandler");
const LLMService_1 = require("./LLMService");
const client_1 = require("../mcp/client");
class WebhookServices {
    static async processWebhook(data) {
        try {
            const client = await (0, client_1.connectMcpServer)();
            const toolsResp = await client.listTools();
            const tools = toolsResp.tools;
            const llmTools = LLMService_1.LLMService.convertTools(tools);
            const messages = [
                {
                    role: 'user',
                    content: data.message
                }
            ];
            messages.unshift({
                role: 'system',
                content: `Kamu adalah asisten virtual pertanian bernama Wabotai.
Kamu ahli dalam agrikultur, budidaya tanaman, varietas benih, pemupukan, pengendalian hama, dan manajemen hasil panen.

Kamu boleh menjawab semua pertanyaan yang berhubungan dengan tanaman, hasil pertanian, atau lingkungan pertanian, termasuk saran umum seperti varietas terbaik, cara menanam, atau kondisi tanah yang cocok.

Jika pertanyaan benar-benar tidak ada kaitannya dengan pertanian (seperti politik, hiburan, teknologi non-pertanian), barulah kamu menolak menjawab dengan sopan.

**Instruksi format jawaban:**
- Jawaban kamu harus berupa teks polos (plain text), tanpa tanda markdown seperti *, **, \`, atau bullet list.
- Jangan gunakan karakter escape seperti \\n, \\t, atau \\.
- Gunakan newline asli (enter) jika perlu membuat paragraf.
- Jangan bungkus jawaban dengan tanda kutip.
- Jangan gunakan format JSON.
Gunakan kalimat alami dan mudah dipahami.`
            });
            const llmResp = await LLMService_1.LLMService.askDeepSeek({
                messages: messages,
                tools: llmTools
            });
            const msg = llmResp.choices[0].message;
            let finalMessage = msg.content || 'No response from LLM';
            console.log('🤖 DeepSeek reply:', msg.content);
            if (msg.tool_calls && msg.tool_calls.length > 0) {
                const newMessages = [...messages];
                for (const call of msg.tool_calls) {
                    if (call.type !== 'function')
                        continue;
                    const toolName = call.function.name;
                    let args;
                    try {
                        args = JSON.parse(call.function.arguments || '{}');
                    }
                    catch {
                        args = {};
                    }
                    console.log(`⚙️ Calling tool: ${toolName} with args`, args);
                    const result = await client.callTool({
                        name: toolName,
                        arguments: args
                    });
                    console.log('🔧 Tool result:', result);
                    newMessages.push({
                        role: 'user',
                        content: JSON.stringify(result),
                        name: toolName,
                        tool_call_id: call.id
                    });
                }
                if (newMessages.length > messages.length) {
                    const followResp = await LLMService_1.LLMService.askDeepSeek({
                        messages: newMessages,
                        tools: llmTools
                    });
                    const followMsg = followResp.choices[0].message;
                    finalMessage = followMsg.content || 'data tidak ditemukan';
                    console.log('🤖 DeepSeek follow-up reply:', followMsg.content);
                }
            }
            // const cleanedResponses = cleanLLMResponse(finalMessage)
            // console.log(finalMessage)
            console.log('🤖 DeepSeek final reply:', finalMessage);
            return finalMessage
                .replace(/\\n/g, '\n')
                .replace(/\\t/g, '\t')
                .replace(/\\r/g, '')
                .replace(/\*\*(.*?)\*\*/g, '$1')
                .replace(/\*(.*?)\*/g, '$1')
                .trim();
        }
        catch (error) {
            logs_1.default.error('WebhookServices.processWebhook', error);
            throw new ServiceErrorHandler_1.ServiceErrorHandler('Failed to send message via Wablas', http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
exports.WebhookServices = WebhookServices;
