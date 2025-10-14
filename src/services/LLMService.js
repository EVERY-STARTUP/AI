"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMService = void 0;
const openai_1 = __importDefault(require("openai"));
const configs_1 = require("../configs");
class LLMService {
    static async askDeepSeek(payload) {
        const client = new openai_1.default({
            apiKey: configs_1.appConfigs.secret.deepSeekApiKey,
            baseURL: 'https://api.deepseek.com'
        });
        const response = await client.chat.completions.create({
            model: 'deepseek-chat',
            messages: payload.messages,
            tools: payload.tools,
            tool_choice: 'auto',
            max_tokens: 512
        });
        return response;
    }
    static convertTools(tools) {
        return tools.map((tool) => ({
            type: 'function',
            function: {
                name: tool.name,
                description: tool.description,
                parameters: tool.inputSchema
            }
        }));
    }
}
exports.LLMService = LLMService;
