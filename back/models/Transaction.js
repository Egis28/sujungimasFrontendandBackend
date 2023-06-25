const mongoose = require('mongoose');

const Transactions = mongoose.model('Transactions', new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createAt:{
        type: Date,
        default: Date.now
    }
}));

module.exports = Transactions