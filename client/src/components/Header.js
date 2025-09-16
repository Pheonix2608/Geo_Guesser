import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">GeoGuesser</Link>
      </div>
      <nav>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/login" className="btn btn-login">Login</Link>
        <Link to="/register" className="btn btn-register">Register</Link>
      </div>
    </header>
  );
};

export default Header;
