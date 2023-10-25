import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import these functions

const Signin = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(); // Get the authentication instance
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value); // Use signInWithEmailAndPassword with the auth instance
      navigate('/Home'); // Redirect to the home page upon successful sign-in
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
      <p>
        <Link to="/dashboard">Continue as Guest</Link>
      </p>
    </div>
  );
};

export default Signin;
