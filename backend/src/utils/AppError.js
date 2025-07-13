export default class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(msg = "Bad Request") {
    return new AppError(msg, 400);
  }

  static unauthorized(msg = "Unauthorized") {
    return new AppError(msg, 401);
  }

  static notFound(msg = "Not Found") {
    return new AppError(msg, 404);
  }
}
