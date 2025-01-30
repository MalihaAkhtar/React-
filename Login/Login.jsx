import React, { useState } from 'react';
import './Login.css';
import mail_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';

export const Login = ({ setShowRegister, setShowPasswordReset }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
      } else {
        alert(data.message);
        setShowRegister(true); // Switch to register form if login fails
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={mail_icon} alt="Mail" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span onClick={() => setShowPasswordReset(true)}>Click Here</span>
      </div>

      <div className="form-toggle-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => setShowRegister(true)}>Switch to Register</button>
      </div>
    </div>
  );
};

export default Login;