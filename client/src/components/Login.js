import React from 'react';
import './Form.css';

const Login = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
