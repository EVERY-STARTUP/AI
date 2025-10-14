"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const PeriodicService_1 = require("../services/PeriodicService");
const productivityModel_1 = require("../models/productivityModel");
const ProductivityService_1 = require("../services/ProductivityService");
const destructiveModel_1 = require("../models/destructiveModel");
const DestructiveService_1 = require("../services/DestructiveService");
const server = new mcp_js_1.McpServer({
    name: 'AI-Assistent MCP Server',
    version: '1.0.0'
});
// tinggi tanaman
server.registerTool('createDataTinggiTanaman', {
    title: 'Create Data Tinggi Tanaman (cm)',
    description: 'create data tinggi tanaman with properties SOP, HST 30, HST 40, HST 50, HST 60 and HST 70',
    inputSchema: {
        sop: zod_1.z.string(),
        hst30: zod_1.z.number().optional(),
        hst40: zod_1.z.number().optional(),
        hst50: zod_1.z.number().optional(),
        hst60: zod_1.z.number().optional(),
        hst70: zod_1.z.number().optional()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'tinggi tanaman',
        periodicCategory: 'TINGGI_TANAMAN',
        periodicData: {
            sop: data.sop,
            hst30: data.hst30,
            hst40: data.hst40,
            hst50: data.hst50,
            hst60: data.hst60,
            hst70: data.hst70
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// jumlah daun
server.registerTool('createDataJumlahDaun', {
    title: 'Create Data  jumlah daun',
    description: 'create data jumlah daun with properties SOP, HST 30, HST 40, HST 50, HST 60 and HST 70',
    inputSchema: {
        sop: zod_1.z.string(),
        hst30: zod_1.z.number().optional(),
        hst40: zod_1.z.number().optional(),
        hst50: zod_1.z.number().optional(),
        hst60: zod_1.z.number().optional(),
        hst70: zod_1.z.number().optional()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'jumlah daun',
        periodicCategory: 'JUMLAH_DAUN',
        periodicData: {
            sop: data.sop,
            hst30: data.hst30,
            hst40: data.hst40,
            hst50: data.hst50,
            hst60: data.hst60,
            hst70: data.hst70
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// diameter batang
server.registerTool('createDataDiameterBatang', {
    title: 'Create Data Diatemeter Batang',
    description: 'create data diameter batang with properties SOP, HST 30, HST 40, HST 50, HST 60 and HST 70',
    inputSchema: {
        sop: zod_1.z.string(),
        hst30: zod_1.z.number().optional(),
        hst40: zod_1.z.number().optional(),
        hst50: zod_1.z.number().optional(),
        hst60: zod_1.z.number().optional(),
        hst70: zod_1.z.number().optional()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'diameter batang',
        periodicCategory: 'DIAMETER_BATANG',
        periodicData: {
            sop: data.sop,
            hst30: data.hst30,
            hst40: data.hst40,
            hst50: data.hst50,
            hst60: data.hst60,
            hst70: data.hst70
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// SPAD
server.registerTool('createDataSPAD', {
    title: 'Create Data SPAD',
    description: 'create data SPAD with properties SOP, HST 30, HST 40, HST 50, HST 60 and HST 70',
    inputSchema: {
        sop: zod_1.z.string(),
        hst30: zod_1.z.number().optional(),
        hst40: zod_1.z.number().optional(),
        hst50: zod_1.z.number().optional(),
        hst60: zod_1.z.number().optional(),
        hst70: zod_1.z.number().optional()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'SPAD',
        periodicCategory: 'SPAD',
        periodicData: {
            sop: data.sop,
            hst30: data.hst30,
            hst40: data.hst40,
            hst50: data.hst50,
            hst60: data.hst60,
            hst70: data.hst70
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// umur berbunga
server.registerTool('createDataUmurBerbunga', {
    title: 'Create Data Umur Berbunga',
    description: 'create data umur berbunga with properties SOP, HST',
    inputSchema: {
        sop: zod_1.z.string(),
        hst: zod_1.z.number()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'umur berbunga',
        periodicCategory: 'UMUR_BERBUNGA',
        periodicData: {
            sop: data.sop,
            hst: data.hst
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// Panjang Bunga Jantan (cm)
server.registerTool('createDataPanjangBungaJantan', {
    title: 'Create Data Panjang Bunga Jantan',
    description: 'create data Panjang Bunga Jantan (cm) with properties SOP, HST 60 and HST 70',
    inputSchema: {
        sop: zod_1.z.string(),
        hst60: zod_1.z.number(),
        hst70: zod_1.z.number()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'Panjang Bunga Jantan',
        periodicCategory: 'PANJANG_BUNGA_JANTAN',
        periodicData: {
            sop: data.sop,
            hst60: data.hst60,
            hst70: data.hst70
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// Panjang daun
server.registerTool('createDataPanjangDaun', {
    title: 'Create Data Panjang Daun',
    description: 'create data Panjang Daun with properties SOP, HST 60 and HST 70',
    inputSchema: {
        sop: zod_1.z.string(),
        hst60: zod_1.z.number(),
        hst70: zod_1.z.number()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'Panjang Daun',
        periodicCategory: 'PANJANG_DAUN',
        periodicData: {
            sop: data.sop,
            hst60: data.hst60,
            hst70: data.hst70
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// Lebar daun
server.registerTool('createDataLebarDaun', {
    title: 'Create Data Lebar Daun',
    description: 'create data Lebar Daun with properties SOP, HST 60 and HST 70',
    inputSchema: {
        sop: zod_1.z.string(),
        hst60: zod_1.z.number(),
        hst70: zod_1.z.number()
    },
    outputSchema: {
        data: zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicData: zod_1.z.any(),
            periodicName: zod_1.z.string(),
            periodicCategory: zod_1.z.string()
        })
    }
}, async (data) => {
    const record = await PeriodicService_1.PeriodicService.create({
        periodicName: 'Lebar Daun',
        periodicCategory: 'LEBAR_DAUN',
        periodicData: {
            sop: data.sop,
            hst60: data.hst60,
            hst70: data.hst70
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                periodicId: output.periodicId,
                periodicName: output.periodicName,
                periodicCategory: output.periodicCategory,
                periodicData: output.periodicData
            }
        }
    };
});
// get periodic by date
server.registerTool('getPeriodicsByDate', {
    title: 'Get Periodic Resources by Date',
    description: 'Fetch periodic resources by created date (YYYY-MM-DD)',
    inputSchema: {
        date: zod_1.z.string()
    },
    outputSchema: {
        data: zod_1.z.array(zod_1.z.object({
            periodicId: zod_1.z.number(),
            periodicName: zod_1.z.string(),
            periodicData: zod_1.z.any(),
            createdAt: zod_1.z.string(),
            updatedAt: zod_1.z.string()
        }))
    }
}, async ({ date }) => {
    const result = await PeriodicService_1.PeriodicService.getByDate(date);
    const output = result.map((d) => d.toJSON());
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: [
                ...output.map((d) => ({
                    periodicId: d.periodicId,
                    periodicName: d.periodicName,
                    periodicData: d.periodicData,
                    createdAt: d.createdAt,
                    updatedAt: d.updatedAt
                }))
            ]
        }
    };
});
// ====== DESTRUCTIVE ======
// ======= CREATE DESTRUCTIVE DATA =======
server.registerTool('createDestructiveData', {
    title: 'Create destructive Data',
    description: 'create Destructive data with properties : SOP (required),	Tinggi Tanaman (cm) 1 (optional),	Tinggi Tanaman (cm) 2 (optional),	Jumlah Daun 1 (optional),	Jumlah Daun 2 (optional),	Diameter Batang (mm) 1 (optional),	Diameter Batang (mm) 2 (optional),	Panjang Bunga Jantan (cm) 1 (optional),	Panjang Bunga Jantan (cm) 2 (optional),	Luas Daun (cm2) 1 (optional),	Luas Daun (cm2) 2 (optional),	Bobot Kering Daun (g) 1 (optional),	Bobot Kering Daun (g) 2 (optional),	Bobot Kering Total (g) 1 (optional),	Bobot Kering Total (g) 2 (optional),	Panjang Tongkol (cm) (optional),	Jumlah Baris Tongkol (optional),	Bobot Tongkol (g) (optional),	Bobot Pipilan Basah (g) (optional), KA Basah (%) (optional),	Bobot Pipilan KA18% (optional),	Bobot Pipilan 100 Biji (g) KA18% (optional)',
    inputSchema: {
        sop: zod_1.z.string(),
        tinggiTanaman1: zod_1.z.number().optional(),
        tinggiTanaman2: zod_1.z.number().optional(),
        jumlahDaun1: zod_1.z.number().optional(),
        jumlahDaun2: zod_1.z.number().optional(),
        diameterBatang1: zod_1.z.number().optional(),
        diameterBatang2: zod_1.z.number().optional(),
        panjangBungaJantan1: zod_1.z.number().optional(),
        panjangBungaJantan2: zod_1.z.number().optional(),
        lebarDaun1: zod_1.z.number().optional(),
        lebarDaun2: zod_1.z.number().optional(),
        bobotKeringDaun1: zod_1.z.number().optional(),
        bobotKeringDaun2: zod_1.z.number().optional(),
        bobotKeringTotal1: zod_1.z.number().optional(),
        bobotKeringTotal2: zod_1.z.number().optional(),
        panjangTongkol: zod_1.z.number().optional(),
        jumlahBarisTongkol: zod_1.z.number().optional(),
        bobotTongkol: zod_1.z.number().optional(),
        bobotPilihanBasah: zod_1.z.number().optional(),
        kaBasah: zod_1.z.number().optional(),
        bobotPilihanKA18: zod_1.z.number().optional(),
        bobotPilihan100BijiKA18: zod_1.z.number().optional()
    },
    outputSchema: {
        data: zod_1.z.object({
            destructiveId: zod_1.z.number(),
            destructiveData: zod_1.z.any()
        })
    }
}, async (data) => {
    const record = await destructiveModel_1.DestructiveModel.create({
        destructiveData: {
            sop: data.sop,
            tinggiTanaman1: data.tinggiTanaman1,
            tinggiTanaman2: data.tinggiTanaman2,
            jumlahDaun1: data.jumlahDaun1,
            jumlahDaun2: data.jumlahDaun2,
            diameterBatang1: data.diameterBatang1,
            diameterBatang2: data.diameterBatang2,
            panjangBungaJantan1: data.panjangBungaJantan1,
            panjangBungaJantan2: data.panjangBungaJantan2,
            lebarDaun1: data.lebarDaun1,
            lebarDaun2: data.lebarDaun2,
            bobotKeringDaun1: data.bobotKeringDaun1,
            bobotKeringDaun2: data.bobotKeringDaun2,
            bobotKeringTotal1: data.bobotKeringTotal1,
            bobotKeringTotal2: data.bobotKeringTotal2,
            panjangTongkol: data.panjangTongkol,
            jumlahBarisTongkol: data.jumlahBarisTongkol,
            bobotTongkol: data.bobotTongkol,
            bobotPilihanBasah: data.bobotPilihanBasah,
            kaBasah: data.kaBasah,
            bobotPilihanKA18: data.bobotPilihanKA18,
            bobotPilihan100BijiKA18: data.bobotPilihan100BijiKA18
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                destructiveId: output.destructiveId,
                destructiveData: output.destructiveData
            }
        }
    };
});
// get destructive by date
server.registerTool('getDestructiveDataByDate', {
    title: 'Get Destructive data by Date',
    description: 'Fetch destructive data by created date (YYYY-MM-DD)',
    inputSchema: {
        date: zod_1.z.string()
    },
    outputSchema: {
        data: zod_1.z.array(zod_1.z.object({
            destructiveId: zod_1.z.number(),
            destructiveData: zod_1.z.any(),
            createdAt: zod_1.z.string(),
            updatedAt: zod_1.z.string()
        }))
    }
}, async ({ date }) => {
    const result = await DestructiveService_1.DestructiveService.getByDate(date);
    const output = result.map((d) => d.toJSON());
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: [
                ...output.map((d) => ({
                    destructiveId: d.destructiveId,
                    destructiveData: d.destructiveData,
                    createdAt: d.createdAt,
                    updatedAt: d.updatedAt
                }))
            ]
        }
    };
});
// ======= CREATE PRODUCTIVITY DATA =======
server.registerTool('createProductivityData', {
    title: 'Create productivity Data',
    description: 'create productivity data with properties : SOP (required),	Luas Lahan (m2) (optional),	Bobot Pipilan (kg) (optional), KA Aktual (%) (optional), Produktivitas Aktual (ton/ha) (optional),	Produktivitas KA18% (ton/ha) (optional)',
    inputSchema: {
        sop: zod_1.z.string(),
        luasLahan: zod_1.z.number().optional(),
        bobotPilihan: zod_1.z.number().optional(),
        kaAktual: zod_1.z.number().optional(),
        produktivitasAktual: zod_1.z.number().optional(),
        produktivitasKA18: zod_1.z.number().optional()
    },
    outputSchema: {
        data: zod_1.z.object({
            productivityId: zod_1.z.number(),
            productivityData: zod_1.z.any()
        })
    }
}, async (data) => {
    const record = await productivityModel_1.ProductivityModel.create({
        productivityData: {
            sop: data.sop,
            luasLahan: data.luasLahan,
            bobotPilihan: data.bobotPilihan,
            kaAktual: data.kaAktual,
            produktivitasAktual: data.produktivitasAktual,
            produktivitasKA18: data.produktivitasKA18
        }
    });
    const output = record.toJSON();
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: {
                productivityId: output.productivityId,
                productivityData: output.productivityData
            }
        }
    };
});
// get productivity by date
server.registerTool('getProductivityDataByDate', {
    title: 'Get Productivity data by Date',
    description: 'Fetch productivity data by created date (YYYY-MM-DD)',
    inputSchema: {
        date: zod_1.z.string()
    },
    outputSchema: {
        data: zod_1.z.array(zod_1.z.object({
            productivityId: zod_1.z.number(),
            productivityData: zod_1.z.any(),
            createdAt: zod_1.z.string(),
            updatedAt: zod_1.z.string()
        }))
    }
}, async ({ date }) => {
    const result = await ProductivityService_1.ProductivityService.getByDate(date);
    const output = result.map((d) => d.toJSON());
    return {
        content: [{ type: 'text', text: JSON.stringify(output) }],
        structuredContent: {
            data: [
                ...output.map((d) => ({
                    productivityId: d.productivityId,
                    productivityData: d.productivityData,
                    createdAt: d.createdAt,
                    updatedAt: d.updatedAt
                }))
            ]
        }
    };
});
const transport = new stdio_js_1.StdioServerTransport();
server.connect(transport);
