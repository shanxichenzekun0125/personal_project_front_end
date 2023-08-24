import React from 'react'; // Import the React module
import SignupPage from "./components/SignupPage"
import './App.css'
import LoginPage from './components/LoginPage';
import ViewHistoryPage from './components/ViewHistoryPage';


// Use the function declaration syntax for exporting
function App() {
  return (
    <>
      <div>
        {/* <LoginPage/> */}
        <ViewHistoryPage />
        {/* <SignupPage /> */}
      </div>
    </>
  );
}

export default App; // Export the App component

