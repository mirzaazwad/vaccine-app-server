const Hospital = require("../models/hospital.model");
const { view_hospitals } = require("../controllers/hospital.controller");

describe("Hospital Controller Test", () => {
  test("should return hospitals successfully", async () => {
    const mockHospitalData = [
      { name: "Hospital 1" },
      { name: "Hospital 2" },
      { name: "Hospital 3" },
    ];

    Hospital.find = jest.fn().mockResolvedValue(mockHospitalData);

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await view_hospitals({}, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      hospital_info: mockHospitalData,
    });
  });

  test("should handle error while retrieving hospitals", async () => {
    const mockError = new Error("Database error");

    Hospital.find = jest.fn().mockRejectedValue(mockError);

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await view_hospitals({}, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      message: "Error registering the vaccine.",
    });
  });
});
