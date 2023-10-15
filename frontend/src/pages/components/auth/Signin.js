// Signin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/authContext'

const Signin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = async () => {
    try {
      await login(email, password);
      // Redirect or handle success
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleSignin}>Sign In</button>
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
