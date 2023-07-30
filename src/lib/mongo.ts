import { environment } from "../environment";
import { MongoClient } from "mongodb";
import { ErrorHandler } from "../error/ErrorHandler";

const uri = environment.mongo_url;

const client = new MongoClient(uri);

export async function connect() {
  try {
    await client.connect();
    console.log("Connected succesfully to mongo");
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler(500, `Database connection error`);
  }
}

export function getConnection() {
  return client.db("forum");
}

export async function closeConnection() {
  try {
    await client.close();
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler(500, `Error when trying to close connection`);
  }
}
