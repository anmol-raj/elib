import { config as conf } from "dotenv";

conf();

const envPort = process.env.PORT;
const envDatabaseUrl = process.env.MONGO_CONNECTION_STRING;

if (!envDatabaseUrl) {
  throw new Error(
    "Missing required environment variable: MONGO_CONNECTION_STRING",
  );
}

const allowedPrefixes = ["mongodb://", "mongodb+srv://"];
if (!allowedPrefixes.some((prefix) => envDatabaseUrl.startsWith(prefix))) {
  throw new Error(
    "Invalid MONGO_CONNECTION_STRING. It must begin with mongodb:// or mongodb+srv://",
  );
}

const _config = {
  port: envPort,
  databaseUrl: envDatabaseUrl,
};

export const config = Object.freeze(_config);
