import { config as conf } from "dotenv";
import globalErrorHandler from "../middlewares/globalErrorHandler.ts";

conf();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
