// App.js
import React, { useState } from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import PasswordReset from './Components/Login/PasswordReset';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const handleShowLogin = () => {
    setShowRegister(false);
    setShowPasswordReset(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowPasswordReset(false);
  };

  const handleShowPasswordReset = () => {
    setShowPasswordReset(true);
    setShowRegister(false);
  };

  return (
    <div className="app">
      {/* Sidebar with props to handle navigation */}
      <Sidebar 
        onShowLogin={handleShowLogin} 
        onShowRegister={handleShowRegister} 
        onShowPasswordReset={handleShowPasswordReset} 
      />

      {/* Main Content */}
      <div className="form-container">
        {showPasswordReset ? (
          <PasswordReset setShowLogin={handleShowLogin} />
        ) : showRegister ? (
          <Register setShowRegister={setShowRegister} />
        ) : (
          <Login 
            setShowRegister={handleShowRegister} 
            setShowPasswordReset={handleShowPasswordReset} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
