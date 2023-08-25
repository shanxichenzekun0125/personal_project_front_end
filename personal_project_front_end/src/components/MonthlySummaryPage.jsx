import React, { useState, useEffect } from 'react';
import { api } from '../utility';

function MonthlySummaryPage() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [categorySummaries, setCategorySummaries] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactionData();
  }, []);

  const fetchTransactionData = async () => {
    try {
      const response = await api.get('transaction/');
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transaction data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateSummary();
  }, [transactions]);

  const calculateSummary = () => {
    let total = 0;
    const categorySummary = {};

    transactions.forEach(transaction => {
      const categoryId = transaction.category;
      const amount = parseFloat(transaction.money_amount);

      total += amount;

      if (categorySummary[categoryId]) {
        categorySummary[categoryId] += amount;
      } else {
        categorySummary[categoryId] = amount;
      }
    });

    setTotalAmount(total);
    setCategorySummaries(categorySummary);
  };

  return (
    <div className="panel">
      <h3>Monthly Summary</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h4>Total Amount: {totalAmount.toFixed(2)}</h4>
          <div className='report-panel'>
          <h4>Expense by Categories</h4>
          <ul>
            {Object.entries(categorySummaries).map(([categoryId, amount]) => (
              <li key={categoryId}>
                Category: {categoryId}, Amount: {amount.toFixed(2)}
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MonthlySummaryPage;





