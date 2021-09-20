import { Request, Response, NextFunction } from 'express';

import AppError from './app.errors';

const ErrorHandler = (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 500,
    message: 'Internal Server Error!',
  });
};

export default ErrorHandler;
