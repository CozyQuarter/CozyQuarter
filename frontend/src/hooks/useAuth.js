// useAuth.js
// useAuth.js
import { useContext, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import AuthContext from '../context/authContext';
import firebaseConfig from '../firebaseConfig';

const useAuth = () => {
  const { user, isAuthenticated, login, logout } = useContext(AuthContext);

  // Replace the placeholder with your actual Google sign-in logic
  const signInWithGoogle = async () => {
    try {
      // Example using Firebase
      // Make sure to replace these with your Firebase configuration and logic
      const app = initializeApp(firebaseConfig);

         // Create a GoogleAuthProvider instance
      const provider = new GoogleAuthProvider();

      // Get the Auth service from the initialized app
      const auth = getAuth(app);

      // Sign in with Google using a pop-up window
      const result = await signInWithPopup(auth, provider);

      // Get the user information from the result
      const { user } = result;

      // Call the login function (replace with your actual login logic)
      await login(user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };
  useEffect(() => {
    // Sign out the user when the component mounts (on app load)
    const signOutOnLoad = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        await signOut(auth);
        // You might want to update the state or take other actions after sign out
      } catch (error) {
        console.error('Error signing out on load:', error);
      }
    };

    signOutOnLoad();
  }, []);

  return { user, isAuthenticated, login, logout, signInWithGoogle };
};

export default useAuth;
