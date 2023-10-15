import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from './logo.png';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="logo-container">
        <img src={logo} alt="CozyQuarter Logo" />
        {/* Company name */}
        {/* <h1>CozyQuarter</h1> */}
      </div>

      <div className="signin-container">
        <div className="signin-message">
          <h2>Sign In</h2>
        </div>


        {/* Email input */}
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        {/* Next button */}
        <button className="next-button">Next</button>

        {/* Sign up message and button */}
        <p className="signup-message">Don't have an account?</p>
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>

        {/* Continue as Guest */}
        <Link to="/home" className="guest-link"> {/* Adjust the route accordingly */}
          Continue as Guest
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
