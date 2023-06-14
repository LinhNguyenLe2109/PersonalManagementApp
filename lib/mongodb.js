import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_URL; // Replace with your MongoDB connection URL
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

async function connectDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db();
  }
}

async function disconnectDatabase() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}

function getDatabase() {
  return db;
}

export { connectDatabase, disconnectDatabase, getDatabase };
