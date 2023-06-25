import React, { useState } from 'react';
import transactionsService from '../services/transactionsService';

const NewTransaction = ({getData}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const setInfo = e =>{
        e.preventDefault();

        const newTransaction = {
            text: text,
            amount: amount,
            user: '649543706dc77711371cc807'
        }
        transactionsService.setTransaction(newTransaction);

        setText('');
        setAmount('');
        getData();
    }
    return (
        <form onSubmit={setInfo}>
            <div>
                <label htmlFor="text">Pajamu / islaidu aprasymas</label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="amount">Suma</label>
                <input
                    type="text"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
            </div>
            <button>Patvirtinti</button>
        </form>
    )
}

export default NewTransaction
