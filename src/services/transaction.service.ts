import { ITransaction } from '../interfaces/transaction.interface';
import TransactionModel from '../models/transaction.model';

class TransactionService {

  // get all transactions
  public getAllTransactions = async (): Promise<ITransaction[]> => {
    const data = await TransactionModel.find();
    return data;
  }

  // add transaction
  public createTransaction = async (body: ITransaction): Promise<ITransaction> => {
    const data = await TransactionModel.create(body);
    return data;
  }

  // get transaction by id
  public getTransactionById = async (_id: string): Promise<ITransaction> => {
    const data = await TransactionModel.findById(_id);
    return data;
  }

  // update transaction
  public updateTransaction = async (_id: string, body: ITransaction): Promise<ITransaction> => {
    const data = await TransactionModel.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true,
      }
    )
    return data;
  }

}

export default TransactionService;
