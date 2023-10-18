// AuthContext.js
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    console.log('in authContext.js');
    async function signup(email, password, firstName, lastName) {
        const auth = getAuth();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update the user's display name with first name and last name
            await updateProfile(user, {
                displayName: `${firstName} ${lastName}`,
            });

            // Save additional user data to MongoDB
            const response = await fetch('http://localhost:8000/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                // If the response is not successful, log status and response text
                console.error('Failed to create user. Status:', response.status);
                const text = await response.text();
                console.error('Response:', text);
                throw new Error('Failed to create user.');
            }

            // If the response is successful, handle it as JSON
            const result = await response.json();
            console.log('CreateUser Response:', result);

            return user; // Return the user object if needed
        } catch (error) {
            console.error('Error during signup:', error.message);
            throw error; // Propagate the error
        }
    }


    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export async function handleLogout(setError, logout) {
    setError("")

    try {
        await logout()
    } catch {
        console.log("Logout failure");
        setError("Failed to log out");
    }
}