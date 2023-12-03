// Signup.js
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import './LandingPage/LandingPage.css';
import './Signin.css'; // Import the new CSS file
import logo from '../../../images/logo.png';
import dorm from '../../../images/dorm.jpg';
import { auth } from '../../../firebaseConfig';

export const AuthContext = React.createContext()


const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  console.log('Currently in signup page');
  const handleSignup = async () => {
    try {
      // Sign up the user
      await signup(email, password, firstName, lastName);

      navigate('/home') // Go to home when they sign in
    } catch (error) {
      console.error('Error message is: ', error.message);

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

        <button type="submit" className="signin-button" onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account? <Link to="/signin">Sign in here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
