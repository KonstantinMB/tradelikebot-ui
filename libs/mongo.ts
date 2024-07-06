import { MongoClient } from "mongodb";

// This lib is used just to connect to the database in next-auth.
// We don't use it anywhere else in the API routes—we use mongoose.js instead (to be able to use models)

declare global {
  // eslint-disable-next-line no-unused-vars
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

const dbName = process.env.NODE_ENV === "production" ? "prod_tradelikebot_db" : "test_tradelikebot_db";

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

export const getDbName = () => dbName; // Export a function to get the current database name
