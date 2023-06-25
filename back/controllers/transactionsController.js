const Transactions = require('../models/Transaction');
const asyncHandler = require('express-async-handler');

// @desc Create new transactions
// @route POST /api/transaction
// @access PRIVAT

const setTransaction = asyncHandler( async(req, res)=>{
    if(!req.body.text || !req.body.amount){
        res.status(400)
        throw new Error('Please add a text and amount');
    }
    const transaction = await Transactions.create({
        text: req.body.text,
        amount: req.body.amount,
        user: req.body.user
    });
    res.status(200).send(transaction);
});

// @desc get transactions
// @route GET /api/transactions
// @access PRIVAT

const getTransactions = asyncHandler( async (req, res)=>{
    const transactions = await Transactions.find({user: '649543706dc77711371cc807'});
    if(!transactions){
        res.status(400)
        throw new Error('transactions not found');
    }
    res.status(200).send(transactions);
})
module.exports = {
    setTransaction,
    getTransactions

}
