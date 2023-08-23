import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"


function HomePage() {

    
  return (
    <>

      <div className='display-container'>
        <h3>Please choose one from the Nav Bar</h3>
        <ul className='choice'>
          <li><b>New</b>: <i>enter a new transactoin</i></li>
          <br/>
          <li><b>History</b>:<i>view all transaction history</i></li>
          <br/>
          <li><b>Report</b>:<i>expense report by category</i></li>
        </ul>
      </div>
      
      
      
      
      
      
      
   </>
      
      // <div className="home-page">
     
      // <button className="home-button">Home</button>
   
      // <div className="text-block">
      //   <h3>Welcom to our Home Expense Tracker App</h3>
      //   <h5>Please choose below:</h5>
      // </div>

      // <div className="button-container">
      //   <Link to="/new-transaction">
      //     <button className="choice-button">New Transaction</button>
      //   </Link>
      //   <Link to>
      //     <button className="choice-button">Viw History</button> 
      //   </Link>  
      //   <Link>
      //      <button className="choice-button">Monthly Summary</button>
      //   </Link>
      // </div>

//     </div>
  );
}

export default HomePage;
