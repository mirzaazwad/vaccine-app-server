const { MongoClient } = require("mongodb");
require('dotenv').config();

describe("Collection Test", () => {
  let connection;
  let db;

  beforeAll(async () => {
    const uri = process.env._MONGO_URI; // Replace with your MongoDB connection URI
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection = await client.connect();
    db = connection.db("hackathon"); // Replace with your database name
  });

  afterAll(async () => {
    await connection.close();
  });

  it("checks if users collection exists", async () => {
    const collectionExists = await db.listCollections({ name: "users" }).hasNext();

    expect(collectionExists).toBe(true);
  });

  
  it("checks if hospitals collection exists", async () => {
    const collectionExists = await db.listCollections({ name: "hospitals" }).hasNext();

    expect(collectionExists).toBe(true);
  });

  
  it("checks if vaccinations collection exists", async () => {
    const collectionExists = await db.listCollections({ name: "vaccinations" }).hasNext();

    expect(collectionExists).toBe(true);
  });

  it("checks if vaccine collection exists", async () => {
    const collectionExists = await db.listCollections({ name: "vaccines" }).hasNext();

    expect(collectionExists).toBe(true);
  });

  
  it("tests that this collection does not exist", async () => {
    const collectionExists = await db.listCollections({ name: "I_do_Not_Exist" }).hasNext();

    expect(collectionExists).toBe(false);
  });






});
