import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../error/ErrorHandler';

export function errorHandler(
  err: ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? 'Internal server error';
  res.status(statusCode).json({ status: 'error', message });
}
