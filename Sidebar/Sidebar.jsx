/* eslint-disable jsx-a11y/anchor-is-valid */
// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({onShowHome, onShowLogin, onShowRegister}) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={onShowHome}><a href="#">Home</a></li> 
        <li onClick={onShowLogin}><a href="#">Login</a></li> 
        <li onClick={onShowRegister}><a href="#">Register</a></li> 
      </ul>
    </div>
  );
};

export default Sidebar;
