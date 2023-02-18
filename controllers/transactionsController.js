const Transaction = require('../models/transactionsModel');

////////////////////////////////////////////////////////////////////////
//TRASACTION: GET METHODS//
////////////////////////////////////////////////////////////////////////

///BY AMOUNT
exports.findTransactionByAmount = async function (req, res) {
  console.log('Amount parameter:', req.params.amount);
  try {
    const amount = parseFloat(req.params.amount);
    const transaction = await Transaction.findOne({ amount: amount });
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).send('Transaction not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};