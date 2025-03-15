import { Document } from "mongoose";

export interface ITransaction extends Document {
  _id: string | number;
  transaction_id: number;
  transaction_value: string;
  transaction_status: TransactionStatus;
  transaction_date: number;
}

export enum TransactionStatus {
  Compeleted = "Compeleted",
  Pending = "Pending",
}
