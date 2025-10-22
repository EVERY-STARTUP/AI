"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanLLMResponse = cleanLLMResponse;
function cleanLLMResponse(text) {
    if (!text)
        return '';
    let cleaned = text;
    try {
        // 🔹 Jika string seperti ""Hello\nWorld"", hapus double quote luar dulu
        cleaned = cleaned.trim();
        if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
            cleaned = cleaned.slice(1, -1);
        }
        // 🔹 Decode escape sequence pakai JSON.parse
        cleaned = JSON.parse(`"${cleaned.replace(/"/g, '\\"')}"`);
    }
    catch {
        // fallback jika parsing gagal
    }
    // 🔹 Bersihkan markdown dan format
    return cleaned
        .replace(/\r/g, '')
        .replace(/\*\*(.*?)\*\*/g, '$1') // **bold**
        .replace(/\*(.*?)\*/g, '$1') // *italic*
        .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // inline code
        .replace(/^\d+\.\s*/gm, '') // hilangkan numbering "1. "
        .replace(/\n{3,}/g, '\n\n') // rapikan newline
        .trim();
}
