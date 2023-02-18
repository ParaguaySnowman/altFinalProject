const mongoose = require('mongoose');
const { Decimal128 } = mongoose;

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Decimal128,
    required: true,
  },
  merchant: {
    type: String,
    required: true,
  },
  taxRelated: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  account: {
    type: Number,
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

