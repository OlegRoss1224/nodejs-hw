import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError || err.status) {
    return res.status(err.status).json({
      message: err.name || err.message,
    });
  }
};
