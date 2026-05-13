import { describe, expect, it, vi } from "vitest";

import request from "supertest";
import { app } from "../index";
import { prismaClient } from "../../prisma/__mocks__/client.js";

// vi.mock("../../prisma/client", () => ({
//   prismaClient: {
//     sum: { create: vi.fn(), findOne: vi.fn() },
//     user: { create: vi.fn(), findOne: vi.fn() },
//   },
// }));

vi.mock("../../prisma/client");

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    prismaClient.sum.create.mockResolvedValue({
      id: 100,
      a: 100,
      b: 200,
      result: 300,
    });

    vi.spyOn(prismaClient.sum, "create");

    const res = await request(app).post("/sum").send({
      a: 2,
      b: 3,
    });

    expect(prismaClient.sum.create).toHaveBeenCalledWith({
      data: {
        a: 2,
        b: 3,
        result: 5,
        // js: "STRING"
      },
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(100);
    expect(res.body.answer).toBe(5);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).post("/sum").send({});
    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe("Incorrect inputs");
  });
});

describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app)
      .get("/sum")
      .set({
        a: "1",
        b: "2",
      })
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).get("/sum").send();
    expect(res.statusCode).toBe(411);
  });
});
