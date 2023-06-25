require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();

app.use(express.json());

const createNewUser = require('./controllers/usersController');
const {
    setTransaction,
    getTransactions
} = require('./controllers/transactionsController');

app.post('/api/user', createNewUser);
app.post('/api/transaction', setTransaction);
app.get('/api/transactions', getTransactions);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
});