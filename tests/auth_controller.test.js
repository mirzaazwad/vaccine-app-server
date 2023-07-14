require("dotenv").config();
const { server, app } = require("../index");
const request = require("supertest");
const { MongoClient } = require("mongodb");

describe("Auth controller test", () => {
  let testIds = [];
  let connection;
  let db;
  afterAll(async () => {
    server.close();
    const uri = process.env._MONGO_URI; 
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = await client.connect();
    db = connection.db();
    const collection = db.collection("users");

    await collection.deleteMany({ n_id: { $in: testIds } });
    await connection.close();
  });

  test("New Registration", async () => {
    const n_id = "31231212";
    const name = "Jamal";
    const address = "Dhaka";
    const password = "12312";

    const response = await request(app)
      .post("/api/auth/register")
      .send({ n_id, name, address, password });

    testIds.push(n_id);
    expect(response.body.message).toBe("Registration successful");
  });

  test("Login Test", async () => {
    const n_id = "1986209134109";
    const password = "Ayesha196";
    const response = await request(app)
      .post("/api/auth/login")
      .send({ n_id, password });
    expect(response.body.message).toBe("Login successful");
  });


  test("Duplicate Registration", async () => {
    const n_id = "31231212";
    const name = "Jamal";
    const address = "Dhaka";
    const password = "12312";
    const response = await request(app)
      .post("/api/auth/register")
      .send({ n_id, name, address, password });

    expect(response.body.message).toBe("User already exists");
  });


});
