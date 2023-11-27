// Login.js
/*import React from 'react';
import './Login.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { color } from '@mui/system';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-header" style={{color:'white',fontFamily:'sans-serif',fontWeight:'bolder'}}>Login</h3>
        <form className="login-form">
          <input type="text" id="username" name="username" placeholder="Enter your username" />
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <Link to="/app"><button type="submit" className='butsty1'>Login</button></Link>
        </form>
        <p className="signup-link" style={{color:'white'}}>Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
  );
};
export default Login;*/

import React, { useEffect } from 'react';
import './Login.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  useEffect(() => {
    // Use Axios to make a GET request
    axios.get(' http://localhost:3002/users')
      .then(response => {
        console.log(response.data); // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-header" style={{ color: 'white', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Login</h3>
        <form className="login-form">
          <input type="text" id="username" name="username" placeholder="Enter your username" />
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <Link to="/app"><button type="submit" className='butsty1'>Login</button></Link>
        </form>
        <p className="signup-link" style={{ color: 'white' }}>Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
  );
};

export default Login;

