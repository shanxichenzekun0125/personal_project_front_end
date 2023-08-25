import React from 'react';
import SignupPage from './components/SignupPage';
import './App.css';
import LoginPage from './components/LoginPage';
import ViewHistoryPage from './components/ViewHistoryPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import NewTransactionPage from './components/NewTransactionPage';
import MonthlySummaryPage from './components/MonthlySummaryPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/new-transaction" element={<NewTransactionPage/>} />
      <Route path="/view-history" element={<ViewHistoryPage/>} />
      <Route path="/monthly-summary" element={<MonthlySummaryPage/>} />
    </Routes>
    </div>
  </>
  );
}

export default App;
