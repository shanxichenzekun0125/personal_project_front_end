import React, { useState } from 'react';
import '../App.css'



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication here
  };

  return (
    <div>
      <h1>Home Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:  
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
      <br />
      <br />
      <br />
      <label>Not a memeber yet?   Please
        <button className='signup'>Sign Up</button>
      </label>
    </div>
  );
}

export default LoginPage;
