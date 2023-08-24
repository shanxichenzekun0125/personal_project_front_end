import React, { useState, useEffect } from 'react';
import { api } from "../utility";

function ViewHistoryPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await api.get("transaction/");
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setLoading(false);
    }
    
  };
    console.log(transactions)
  return (
    <div className="transaction-list-page">
      <h3>Transaction List</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <div>Category: {transaction.category}</div>
              <div>Amount: {transaction.money_amount}</div>
              <div>Time: {transaction.time}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewHistoryPage;
