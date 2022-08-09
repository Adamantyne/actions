import supertest from "supertest";
import prisma from "../database.js";
import app from "../app.js";

describe("arquivo testado", () => {
  it("return not found", async () => {
    const response = await supertest(app).get("/not_found");
    expect(response.statusCode).toEqual(404);
  });

  it("return students", async () => {
    const response = await supertest(app).get("/students");
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.statusCode).toBe(200);
  });
});