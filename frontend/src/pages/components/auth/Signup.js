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
      const response = await signup(email, password, firstName, lastName);
      const text = await response.text();
      console.log('Response Text:', text);
      if (response.headers.get('content-type')?.includes('application/json')) {
        const data = await response.json();
        console.log('Signup Response:', data);
        console.log('Success signing up');
        // Redirect or handle success
      } else {
        console.error('Invalid JSON response:', response);
        setError('Failed to sign up. Please try again.');
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
