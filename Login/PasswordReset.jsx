import React, { useState } from 'react';
import './Login.css';

const PasswordReset = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        setShowLogin(true); // Switch back to login on success
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Password reset failed');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Reset Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="form-toggle-buttons">
        <button onClick={handlePasswordReset}>Reset Password</button>
        <button onClick={() => setShowLogin(true)}>Back to Login</button>
      </div>
    </div>
  );
};

export default PasswordReset;