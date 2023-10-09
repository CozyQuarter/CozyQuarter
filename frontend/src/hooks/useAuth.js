// useAuth.js
import { useContext } from 'react';
import AuthContext from '../context/authContext';

const useAuth = () => {
    const { user, isAuthenticated, login, logout } = useContext(AuthContext);
  
    return { user, isAuthenticated, login, logout };
  };
  
  export default useAuth;
