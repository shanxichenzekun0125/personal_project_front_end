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
    <div className="content-container">
      <div className='panel'>
      <h3>Enter New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
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
          <input
            type="number"
            value={moneyAmount}
            onChange={(e) => setMoneyAmount(e.target.value)}
            placeholder='Enter money amount'
          />
        </div>
        <div>
          <label>Please Select Time (Optional)</label>
          <br/>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
      
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Location (Optional)'
          />
        </div>
        <div>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder='Put some note here (Optional)'/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default NewTransactionPage;
