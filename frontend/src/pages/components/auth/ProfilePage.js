import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';
import Review from '../Review';
import './ProfilePage.css'; // Import your CSS file

const ProfilePage = () => {
    const { currentUser, logout } = useAuth();
    const [userReviews, setUserReviews] = useState([]);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/Home');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Define the base API URL based on the environment
    const API_BASE_URL = process.env.NODE_ENV === 'production'
        ? 'https://cozyquarter-9251ad96e93b.herokuapp.com'
        : 'http://localhost:8000';

    useEffect(() => {
        // Fetch user-specific reviews
        const fetchUserReviews = async () => {
            try {

                const apiUrl = `${API_BASE_URL}/api/getUserReviews/${currentUser.email}`;

                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const reviews = await response.json();
                    setUserReviews(reviews);
                } else {
                    console.log(currentUser.email);
                    console.log(currentUser.displayName);
                    console.error('Failed to fetch user reviews.');
                }
            } catch (error) {
                console.error('Error fetching user reviews:', error);
            }
        };

        if (currentUser) {
            fetchUserReviews();
        }
    }, [currentUser]);

    return (
        <div className="profile-container">
            {currentUser ? (
                <div className="profile-content">
                    <div className="profile-header">
                        <h2>Welcome, {currentUser.displayName}!</h2>
                        <p>Email: {currentUser.email}</p>
                    </div>
                    <div className="profile-picture">
                        {/* Add profile picture here */}
                        <img src="your-profile-picture-url.jpg" alt="Profile" />
                    </div>
                    <h3>Your Reviews:</h3>
                    <div className="user-reviews">
                        {userReviews.map((review) => (
                            <Review key={review._id} reviewData={review} hideReportButton />
                        ))}
                    </div>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please sign in to view your profile.</p>
            )}
        </div>
    );
};

export default ProfilePage;
