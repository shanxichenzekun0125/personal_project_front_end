import React from 'react';


function HomePage() {

    
  return (
    <div className="home-page">
     
      <button className="home-button">Home</button>
   
      <div className="text-block">
        <h3>Welcom to our Home Expense Tracker App</h3>
        <h5>Please choose below:</h5>
      </div>

      <div className="button-container">
        <button className="choice-button">New Transaction</button>
        <button className="choice-button">Viw History</button>   
        {/* you should be able to click one transaction to check all info */}
        <button className="choice-button">Monthly Summary</button>

      </div>

    </div>
  );
}

export default HomePage;
