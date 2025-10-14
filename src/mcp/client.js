"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMcpServer = connectMcpServer;
const index_js_1 = require("@modelcontextprotocol/sdk/client/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/client/stdio.js");
const configs_1 = require("../configs");
async function connectMcpServer() {
    const transport = new stdio_js_1.StdioClientTransport({
        command: 'node',
        args: [configs_1.appConfigs.mcp.serverPath ?? './build/src/mcp/server.js']
    });
    const client = new index_js_1.Client({
        name: 'ts-client',
        version: '1.0.0'
    });
    await client.connect(transport);
    console.log('✅ Connected to MCP server');
    return client;
}
