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
      <h4>New User Signup</h4>
      <input
        type="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      
      <input type="Submit" />
    </form>
  );
}

export default LoginPage;
