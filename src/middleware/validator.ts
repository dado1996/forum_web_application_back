import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

export function validatorHandler(
  schema: ObjectSchema,
  property: 'body' | 'query' | 'param'
) {
  return function (req: Request, res: Response, next: NextFunction) {
    const data: unknown = req[property];

    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      res.status(400).json({
        status: 'error',
        message: 'There was an error on the data validation',
        data: error.details.map((err) => ({ message: err.message })),
      });
      return;
    }

    next();
  };
}
