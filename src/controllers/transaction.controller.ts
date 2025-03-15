import { NextFunction, Request, Response } from "express";
import TransactionService from "../services/transaction.service";
import HttpStatus from 'http-status-codes';

class TransactionController {

  public TransactionService = new TransactionService();

  /**
   * @description Get all transactions
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @method GET
   */
  public getTransactions = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const data = await this.TransactionService.getAllTransactions();
      res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: data,
        message: 'Successfully fetched all transactions',
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description Get a transaction by id
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @method GET
   */
  public getTransaction = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const data = await this.TransactionService.getTransactionById(req.params._id);
      res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: data,
        message: 'Successfully fetched transaction',
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @description Create a transaction
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @method POST
   */
  public createTransaction = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const data = await this.TransactionService.createTransaction(req.body);
      res.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        data: data,
        message: 'Successfully created transaction',
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @description Update a transaction by id
  * @param {object} req
  * @param {object} res
  * @param {object} next
  * @method PUT
  */
  public updateTransaction = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const data = await this.TransactionService.updateTransaction(req.params._id, req.body);
      res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: data,
        message: 'Successfully updated transaction',
      });
    } catch (error) {
      next(error);
    }
  }

}
export default TransactionController;
