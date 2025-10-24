"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanLLMResponse = cleanLLMResponse;
function cleanLLMResponse(text) {
    return (text
        // Hapus karakter newline literal seperti \n atau \\n
        .replace(/\\n+/g, ' ')
        // Ubah \" menjadi "
        .replace(/\\"/g, '"')
        // Hapus karakter backslash ganda (\\)
        .replace(/\\\\/g, '')
        // Hapus tanda * dan -
        .replace(/[*-]+/g, '')
        // Ganti spasi ganda menjadi satu
        .replace(/\s{2,}/g, ' ')
        // Hilangkan spasi di awal dan akhir teks
        .trim());
}
