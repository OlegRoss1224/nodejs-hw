import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const status = err.status || err.statusCode || 500;

  const message = err.message || err.name || 'Something went wrong';

  if (err instanceof HttpError || err.status) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({
    message: status === 500 ? 'Something went wrong' : message,
  });
};
