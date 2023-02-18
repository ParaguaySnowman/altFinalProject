const Transaction = require('./models/Transaction');

////////////////////////////////////////////////////////////////////////
//TRASACTION: GET METHODS//
////////////////////////////////////////////////////////////////////////

///BY AMOUNT
//handler
async function findTransactionByAmount(req, res) {
  try {
    const amount = parseInt(req.params.amount);
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
}