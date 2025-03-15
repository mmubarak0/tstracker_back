import express, { IRouter } from 'express';
import transactionController from "../controllers/transaction.controller";
import transactionValidator from '../validators/transaction.validator';
import { userAuth } from '../middlewares/auth.middleware';

class TransactionRoutes {
  private TransactionController = new transactionController();
  private router = express.Router();
  private TransactionValidator = new transactionValidator();

  constructor() {
    this.routes();
  }

  private routes() {
    // get all transactions
    this.router.get("", this.TransactionController.getTransactions);
    // get a transaction
    this.router.get("/:_id", this.TransactionController.getTransaction);
    // create a transaction
    this.router.post("", this.TransactionValidator.newTransaction, this.TransactionController.createTransaction);
    // delete a transaction
    this.router.put("/:_id", this.TransactionController.updateTransaction);
  }

  public getRoutes(): IRouter {
    return this.router;
  }
}

export default TransactionRoutes;
