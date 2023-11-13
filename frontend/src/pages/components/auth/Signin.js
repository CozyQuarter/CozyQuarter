// Signin.js
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Signin.css'; // Import the new CSS file
import logo from '../../../images/logo.png';
import dorm from '../../../images/dorm.jpg';

const Signin = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate('/Home');
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="landing-container">

      <div className="logo-container">
        <img src={logo} alt="CozyQuarter Logo" />
        <img src={dorm} alt="Clipart of dorm" />
      </div>

      <div className="signin-container">
        <div className="signin-message">
          <h2>Sign In</h2>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignin}>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              required
            />
          </div>

          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>.
        </p>
        <p>
          <Link to="/home">Continue as Guest</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
