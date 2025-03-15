import { Schema, model } from "mongoose";
import { ITransaction, TransactionStatus } from "../interfaces/transaction.interface";

const transactionSchema = new Schema(
  // schema structure.
  {
    transaction_id: { type: String },
    transaction_value: { type: Number },
    transaction_status: { type: TransactionStatus },
    transaction_date: { type: Number },
  },
  // schema options. timestamps will add createdAt and updatedAt fields.
  // https://mongoosejs.com/docs/guide.html#timestamps
  {
    timestamps: true,
  }
)

export default model<ITransaction>("Transaction", transactionSchema);
