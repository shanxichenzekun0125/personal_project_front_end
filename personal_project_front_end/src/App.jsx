import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ViewHistoryPage from './components/ViewHistoryPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import NewTransactionPage from './components/NewTransactionPage';
import MonthlySummaryPage from './components/MonthlySummaryPage';
import SignupPage from './components/SignupPage'

function App() {
  const [user, setUser] = useState(null); // Initialize user to null

  return (
    <>
      <Navbar user={user} />
      <div>
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />} // Redirect to login if not logged in
          />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          {user && ( // Protect the following routes with authentication
            <>
              <Route path="/new-transaction" element={<NewTransactionPage />} />
              <Route path="/view-history" element={<ViewHistoryPage />} />
              <Route path="/monthly-summary" element={<MonthlySummaryPage />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;












// import React from 'react';
// import SignupPage from './components/SignupPage';
// import './App.css';
// import LoginPage from './components/LoginPage';
// import ViewHistoryPage from './components/ViewHistoryPage';
// import HomePage from './components/HomePage';
// import Navbar from './components/Navbar';
// import NewTransactionPage from './components/NewTransactionPage';
// import MonthlySummaryPage from './components/MonthlySummaryPage';
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//   <><LoginPage/>
//     <Navbar/>
//     <div>
//     <Routes>
//       <Route path="/" exact element={<HomePage/>} />
//       <Route path="/new-transaction" element={<NewTransactionPage/>} />
//       <Route path="/view-history" element={<ViewHistoryPage/>} />
//       <Route path="/monthly-summary" element={<MonthlySummaryPage/>} />
//     </Routes>
//     </div>
//   </>
//   );
// }

// export default App;
