// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';

const Signup = () => {
  const { signup } = useAuth();
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

        // Check if the response includes an existing user (deleted)
        const data = await response.json();
        if (data.error && data.error.includes('User already exists')) {
          console.log('Existing user detected. User deleted during signup.');
        }
      } else {
        console.error('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError('Failed to sign up. Please try again.');
    }
  };


  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
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
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <Link to="/signin">Sign in here</Link>.
      </p>
    </div>
  );
};

export default Signup;
