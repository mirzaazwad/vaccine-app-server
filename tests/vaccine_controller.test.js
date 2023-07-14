const request = require('supertest');
const { app, server } = require("../index"); 
const Vaccine = require('../models/vaccine.model');

describe('Vaccine API', () => {
    afterAll((done) => {
        server.close(done);
      });
    
  test('should fetch all vaccines successfully', async () => {
    const mockVaccines = [
      { name: 'Vaccine 1' },
      { name: 'Vaccine 2' },
      { name: 'Vaccine 3' },
    ];

    Vaccine.find = jest.fn().mockResolvedValue(mockVaccines);

    const response = await request(app).get('/api/vaccine_info/view_all_vaccines');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, vaccine_info: mockVaccines });
    expect(Vaccine.find).toHaveBeenCalledWith({});
  });

  test('should handle error while fetching vaccines', async () => {
    const mockError = new Error('Database error');
    Vaccine.find = jest.fn().mockRejectedValue(mockError);

    const response = await request(app).get('/api/vaccine_info/view_all_vaccines');

    
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ success: false, message: 'Error registering the vaccine.' });
    expect(Vaccine.find).toHaveBeenCalledWith({});
  });
});
