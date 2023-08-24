import React, { useState, useEffect} from 'react';
import '../App.css';
import {api} from "../utility"

function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("username: ", userName);
    console.log("password: ", password);
  }, [userName, password]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await api.post("user/signup/", {
        email: userName,
        password: password
      });

      // Handle the response here, e.g., show a success message
      console.log("Signup successful!", response.data);
    } catch (error) {
      // Handle the error here, e.g., show an error message
      console.error("Error signing up:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Home Expense Track User Signup</h3>
      <input
        type="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      
      <input type="Submit" />
    </form>
  );
}

export default LoginPage;
