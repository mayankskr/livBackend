// Custom class error
export class AppError extends Error{
    constructor(
        message,
        statusCode,
        errors=[],
        stack=""
    ){
        super(message)
        this.status=statusCode;
        this.message = message;
        this.data = null;
        this.success = false;
        this.errors = errors;
        this.isOperational = true; 
        if(stack){
            this.stack =stack
        }
        else{
            Error.captureStackTrace(this, this.constructor); 
        }
    }
}
// Async error handler -> Async wrap
export const asyncWrap = (fn) => {
  return (req, res, next) => {
      Promise.resolve(fn(req, res, next))
      .catch(next);
}};
