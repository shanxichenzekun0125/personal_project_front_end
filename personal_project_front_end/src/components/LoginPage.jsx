import React, { useState } from 'react';
import { api } from "../utility";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("user/login/", {
        email: email,
        password: password
      });

      // Handle the successful login response here, e.g., store user token
      console.log("Login successful!", response.data);
    } catch (error) {
      // Handle the login error here
      console.error("Error logging in:", error);
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <h3>Login to Home Expense Tracker</h3>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;




















// import React, { useState, useEffect} from 'react';
// import '../App.css';
// import {api} from "../utility"

// function LoginPage() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     console.log("username: ", userName);
//     console.log("password: ", password);
//   }, [userName, password]);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     try {
//       const response = await api.post("user/signup/", {
//         email: userName,
//         password: password
//       });

//       // Handle the response here, e.g., show a success message
//       console.log("Signup successful!", response.data);
//     } catch (error) {
//       // Handle the error here, e.g., show an error message
//       console.error("Error signing up:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Home Expense Track</h3>
//       <input
//         type="email"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

      
//       <input type="Submit" />
//     </form>
//   );
// }

// export default LoginPage;
