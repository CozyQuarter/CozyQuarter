// Dashboard.js
import React from 'react';
import { useAuth } from '../../../context/authContext'

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {currentUser.email}!</h2>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
