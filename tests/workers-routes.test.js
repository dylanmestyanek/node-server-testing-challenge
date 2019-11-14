const request = require("supertest");

const server = require("../api/server");
const db = require("../database/db-config");
const { 
    get, 
    getById, 
    add,
    update,
    remove
} = require("../models/workers-model");

describe("Workers Routes", () => {
   
    describe("GET /api/workers", () => {
        it('Should return status code 200', () => {
            return request(server).get("/api/workers").then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('Should return length of workers table from database', async () => {
            const workers = await get();
            expect(workers).toHaveLength(5);
        });
    });

    describe("GET /api/workers/:id", () => {
        it('Should return status code 200', () => {
            return request(server).get("/api/workers/:id").then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('Should return the a worker object', async () => {
            const worker = await db('workers').where({ id: 1 }).first();
            expect(typeof worker).toBe('object');
            expect(worker.name).toBeDefined();
        });
    });

});