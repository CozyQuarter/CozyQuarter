// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from '../firebase/compat/app';
import firebaseConfig from '../firebaseConfig';

import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      console.log('Before Google sign-in');
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      console.log('After Google sign-in');

      // Extracting user information including display name
    const { user } = result;
    const { displayName, email, uid } = user;

    const checkUserResponse = await axios.post('/api/checkUser', {email});
    console.log('checkUserResponse:', checkUserResponse.data);

    if (checkUserResponse.data.exists) {
      // User exists, set the user state
      setUser({
        displayName,
        email,
        uid,
      });
    } else {
      // User doesn't exist, create a user in the backend
      const createUserResponse = await axios.post('/api/createUser', {
        
        firstName: displayName.split(' ')[0], // Assuming the first part is the first name
        lastName: displayName.split(' ')[1], // Assuming the second part is the last name
        email,
        password: '', // You might want to handle this differently, maybe generate a random password
      });
      console.log('createUserResponse:', createUserResponse.data);
      if (createUserResponse.data.success) {
        // User created successfully, set the user state
        setUser({
          displayName,
          email,
          uid,
        });
      } else {
        console.error('Error creating user:', createUserResponse.data.error);
      }
    }
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

  const logout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const contextValue = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
export default AuthContext;
