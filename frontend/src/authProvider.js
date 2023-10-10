// AuthProvider.js

import React, { useState } from 'react';
import AuthContext from './context/authContext';
import {
  AuthProvider as FirebaseAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = getAuth(); // Get the auth instance from Firebase

  const signUp = async (firstName, lastName, email, password) => {
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user state and set isAuthenticated to true
      setUser(userCredential.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const signIn = async (email, password) => {
    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Update the user state and set isAuthenticated to true
      setUser(userCredential.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Create a GoogleAuthProvider instance
      const provider = new GoogleAuthProvider();

      // Sign in with Google using a pop-up window
      const userCredential = await signInWithPopup(auth, provider);

      // Update the user state and set isAuthenticated to true
      setUser(userCredential.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const logout = () => {
    // Sign out the user
    // Note: You might want to handle any additional cleanup or actions here
    // For example, clear user data from local storage or reset other state
    signOut(auth);

    // Reset the user state and set isAuthenticated to false
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signUp, signIn, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
