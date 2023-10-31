// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import './LandingPage/LandingPage.css';
import logo from '../../../images/logo.png';
import dorm from '../../../images/dorm.jpg';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      // Sign up the user
      const response = await signup(email, password, firstName, lastName);

      if (response.ok) {
        console.log('User signed up successfully.');
        navigate('/signin');

        // Check if the response includes an existing user (deleted)
        const data = await response.json();
        if (data.error && data.error.includes('User already exists')) {
          console.log('Existing user detected. User deleted during signup.');
        }
      } else {
        console.error('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('Error message is: ', error.message);
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('Email is already in use. Try again');
      } else {
        setError('Failed to sign up. Please try again.');

      }
    }
  };


  return (
    <div className="landing-container">
      <div className="logo-container">
        <img src={logo} alt="CozyQuarter Logo" />
        {/* Company name */}
        {/* <h1>CozyQuarter</h1> */}
        <img src={dorm} alt="Clipart of dorm" />
      </div>
      
      <div className="signin-container">
        <div className="signin-message"><h2>Sign Up</h2></div>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="input-container">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button onClick={handleSignup} className="signup-button">Sign Up</button>
        <p>
          Already have an account? <Link to="/signin">Sign in here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
