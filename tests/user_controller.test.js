const request = require("supertest");
const { app, server } = require("../index"); // Assuming your Express app is exported from 'app.js'
const User = require("../models/user.model");

describe("User API", () => {
  afterAll((done) => {
    server.close(done);
  });

  test("should fetch user details successfully", async () => {
    const mockUser = {
      n_id: "123",
      name: "John Doe",
      address: "123 Main St",
      password: "password123",
    };

    User.findOne = jest.fn().mockResolvedValue(mockUser);

    const response = await request(app).get("/api/user/get-user/123");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, message: "User found!", user: mockUser });
  });

  test("should handle error when user is not found", async () => {
    User.findOne = jest.fn().mockResolvedValue(null);

    const response = await request(app).get("/api/user/get-user/123");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      success: false,
      message: "User not found!",
    });
  });

  test("should handle error while fetching user details", async () => {
    const mockError = new Error("Database error");
    User.findOne = jest.fn().mockRejectedValue(mockError);

    const response = await request(app).get("/api/user/get-user/123");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      success: false,
      message: "Error fetching user details.",
    });
  });
});
