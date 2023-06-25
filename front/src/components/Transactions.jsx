import React, { useState, useEffect } from 'react';
import transactionsService from '../services/transactionsService';
import NewTransaction from './NewTransaction';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    const getData = () => {
        transactionsService.getTansactions().then(res => {
            if(res !== undefined){
                setTransactions([...res])
            }         
        })
    }

    useEffect(() => {
        getData()
    }, []);

    console.log(transactions);

    return (
        <div>
            <NewTransaction getData={getData}/>
            {
                transactions.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <td>Pajamos/islaidos</td>
                                <td>Suma</td>
                            </tr></thead>
                        <tbody>
                            {transactions.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.text}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (<h3>Tu neturi ivestu pajamu/islaidu</h3>)
            }
        </div>
    )
}

export default Transactions
