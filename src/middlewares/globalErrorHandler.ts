import { HttpError } from "http-errors";
import type { NextFunction, Request, Response } from "express";
import { config } from "../config/config.ts";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    // below code shouldn't be in production
    errorStack: config.env === "dev" ? err.stack : "",
  });
};

export default globalErrorHandler;
