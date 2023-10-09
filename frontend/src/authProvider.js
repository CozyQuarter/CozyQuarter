// AuthProvider.js

import React, { useState, useContext } from 'react';
import AuthContext from './context/authContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    // Perform your login logic here, set the user and isAuthenticated
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform your logout logic here, reset the user and isAuthenticated
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
