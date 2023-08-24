import React from 'react'; // Import the React module
import SignupPage from "./components/SignupPage"
import './App.css'
import LoginPage from './components/LoginPage';
import ViewHistoryPage from './components/ViewHistoryPage';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import NewTransactionPage from './components/NewTransactionPage';
import MonthlySummaryPage from './components/MonthlySummaryPage';


// Use the function declaration syntax for exporting
function App() {
  return (
    <>
      <div>
        {/* <Navbar/> */}
        {/* {/* <HomePage /> */}
        {/* <ViewHistoryPage />  */}
        {/* <SignupPage /> */}
        {/* <NewTransactionPage/> */}
        <MonthlySummaryPage/>
      </div>
    </>
  );
}

export default App; // Export the App component

