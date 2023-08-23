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
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
      </ul>
    </nav>
  );
}


