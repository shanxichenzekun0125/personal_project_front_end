import React, { useState, useEffect } from 'react';
import { api } from '../utility';

function NewTransactionPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [moneyAmount, setMoneyAmount] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get('category/');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting data:', {
      category: selectedCategory,
      money_amount: moneyAmount,
      time: time,
      location: location,
      note: note,
    });

    try {
      await api.post('transaction/', {
        category: selectedCategory,
        money_amount: moneyAmount,
        time: time,
        location: location,
        note: note,
      });

      // Clear the form after successful submission
      setSelectedCategory('');
      setMoneyAmount('');
      setTime('');
      setLocation('');
      setNote('');
    } catch (error) {
      console.error('Error submitting transaction:', error);
    }
  };

  return (
    <div className="new-transaction-page">
      <h3>Enter New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={moneyAmount}
            onChange={(e) => setMoneyAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Note:</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewTransactionPage;
