//Node Modules
const express = require('express');
const router = express.Router();

//Middlewares
const validation = require('../middleware/validate');

//Controllers
const transactionsController = require('../controllers/transactionsController');

//Routes
router.get
(
  '/transactions/:amount',
  transactionsController.findTransactionByAmount
);

module.exports = router;
