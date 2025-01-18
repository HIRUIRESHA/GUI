import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',  // Add username in state
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignUp ? 'Sign up:' : 'Sign in:', formData);
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="containersign">
      <div className="form-container">
        <h2 className="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <div className="social-icons">
          <button className="icon-button google">
            <img src="src\assets\google_icon.png" alt="Google Icon" className="social-icon" />
          </button>
          <button className="icon-button apple">
            <img src="src/assets/apple_icon.png" alt="" className="social-icon"/>
          </button>
        </div>

        <div className="divider">or</div>

        <form onSubmit={handleSubmit} className="form">
          {isSignUp && (
            <div className="form-group">
              <label>Username</label>
              <div className="input-container">
                <span className="icon">👤</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username} // Bind the username field
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })} // Update username
                  required
                />
              </div>
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <div className="input-container">
              <span className="icon">📧</span>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-container">
              <span className="icon">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <span className="icon eye" onClick={togglePasswordVisibility}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>

          {!isSignUp && (
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="submit-button">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="toggle-text">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Sign;
