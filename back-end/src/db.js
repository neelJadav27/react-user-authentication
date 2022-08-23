//import { MongoClient } from 'mongodb';
const MongoClient = require("mongodb");

let client;

const initializeDbConnection = async () => {
  client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};

module.exports = { initializeDbConnection, getDbConnection };
