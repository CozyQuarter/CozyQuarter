import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';
import logo from '../../../../images/logo.png';
import { useAuth } from '../../../../context/authContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LandingPage = () => {
  const { currentUser } = useAuth();
  const [step, setStep] = useState(1);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [email, setEmail] = useState(''); // Add state to store email

  const navigate = useNavigate();

  const handleNext = () => {

    if (step === 1) {
      if (emailRef.current && emailRef.current.value) {
        setEmail(emailRef.current.value);
        setStep(2);
        setError('');
      } else {
        setError('Please enter your email.');
      }
    } else if (step === 2) {
      if (passwordRef.current && passwordRef.current.value) {
        setError('');
        signIn();
      } else {
        setError('Please enter your password.');
      }
    }
  };

  const signIn = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, passwordRef.current.value);
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
        {/* Company name */}
        {/* <h1>CozyQuarter</h1> */}
      </div>

      <div className="signin-container">
        {step === 1 ? (
          <>
            <div className="signin-message">
              <h2>Sign In</h2>
            </div>
            {/* Email input */}
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                ref={emailRef}
              />
            </div>
          </>
        ) : (
          <>
            <div className="signin-message">
              <h2>Sign In</h2>
            </div>
            {/* Password input*/}
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                ref={passwordRef}
              />
            </div>
          </>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Next button */}
        <button className="next-button" onClick={handleNext}>
          {step === 1 ? 'Next' : 'Sign In'}
        </button>

        {/* Sign up message and button */}
        {step === 1 ? (
          <p className="signup-message">Don't have an account?</p>
        ) : (
          <p className="signup-message">Not your account?</p>
        )}
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
