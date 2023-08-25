import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Navbar() {

   
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Home Expense Tracker
      </Link>
      <ul>

        <li>
          <Link to="/new-transaction">New</Link>
        </li>
        <li>
          <Link to="/view-history">History</Link>
        </li>
        <li>
          <Link to="/monthly-summary">Report</Link>
        </li>
      </ul>
    </nav>
  );
}
