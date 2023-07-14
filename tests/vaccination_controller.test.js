const request = require("supertest");
const { app, server } = require("../index");
const Vaccination = require("../models/vaccination.model");

describe("Vaccination API", () => {
  afterAll((done) => {
    server.close(done);
  });
  test("should register a vaccine successfully", async () => {
    const requestBody = {
      n_id: "123",
      vaccine_id: "456",
      administeredAt: "2023-07-15",
      vaccine_name: "COVID-19 Vaccine",
    };

    const mockExistingVaccines = [
      {
        n_id: "123",
        vaccine_id: "456",
      },
    ];
    Vaccination.find = jest.fn().mockResolvedValue(mockExistingVaccines);

    Vaccination.prototype.save = jest.fn();

    const response = await request(app)
      .post("/api/vaccine/vaccine_register")
      .send(requestBody);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: "Vaccine registered successfully.",
    });
    expect(Vaccination.find).toHaveBeenCalledWith({
      n_id: "123",
      vaccine_id: "456",
    });
    expect(Vaccination.prototype.save).toHaveBeenCalled();
  });

  test("should handle error while registering a vaccine", async () => {
    
    const requestBody = {
      n_id: "123",
      vaccine_id: "456",
      administeredAt: "2023-07-15",
      vaccine_name: "COVID-19 Vaccine",
    };

    
    const mockExistingVaccines = [
      {
        n_id: "123",
        vaccine_id: "456",
      },
    ];
    Vaccination.find = jest.fn().mockResolvedValue(mockExistingVaccines);
    
    const mockError = new Error("Database error");
    Vaccination.prototype.save = jest.fn().mockRejectedValue(mockError);

    const response = await request(app)
      .post("/api/vaccine/vaccine_register")
      .send(requestBody);

    
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      success: false,
      message: "Error registering the vaccine.",
    });
    expect(Vaccination.find).toHaveBeenCalledWith({
      n_id: "123",
      vaccine_id: "456",
    });
    expect(Vaccination.prototype.save).toHaveBeenCalled();
  });
});
