import Joi from "@hapi/joi";
import { NextFunction, Request, Response } from "express";

class TransactionValidator {
  public newTransaction = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const schema = Joi.object({
      // transaction_id is either a string or a number
      transaction_id: Joi.alternatives(Joi.string(), Joi.number()).required(),
      transaction_value: Joi.number().required(),
      transaction_status: Joi.string().required(),
      transaction_date: Joi.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default TransactionValidator;
