import React from 'react';
import './Form.css';

const Register = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" />
        </div>
        <button type="submit" className="btn-submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
