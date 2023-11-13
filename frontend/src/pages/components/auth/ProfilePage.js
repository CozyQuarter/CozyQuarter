import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';
import Review from '../Review';
import './ProfilePage.css'; // Import your CSS file
import '../../../index.css'
import './Signin.css'



const ProfilePage = () => {
    const { currentUser, logout } = useAuth();
    const [userReviews, setUserReviews] = useState([]);
    const navigate = useNavigate();

    const API_BASE_URL =
        process.env.NODE_ENV === 'production'
            ? 'https://cozyquarter-9251ad96e93b.herokuapp.com'
            : 'http://localhost:8000';

    useEffect(() => {
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

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/Home');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleDeleteReview = async (reviewId) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this review?');

        if (isConfirmed) {
            try {
                console.log("reviewid is ", reviewId);
                const apiUrl = `${API_BASE_URL}/api/deleteReview/${reviewId}`;

                const response = await fetch(apiUrl, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log("response is", response);

                if (response.ok) {
                    setUserReviews((prevReviews) => prevReviews.filter((review) => review._id !== reviewId));
                    console.log('Review deleted successfully.');
                } else {
                    console.error('Failed to delete the review.');
                }
            } catch (error) {
                console.error('Error deleting the review:', error);
            }
        }
    };

    return (
        <div className="profile-container">
            {currentUser ? (
                <div className="profile-content">
                    <div className="profile-header">
                        <b>
                            <span className="custom-heading3">Welcome, </span>
                            <span className="custom-heading2">{currentUser.displayName}</span>
                            <span className="custom-heading3">!</span>
                        </b>
                        <p>Email: {currentUser.email}</p>
                    </div>
                    <div className="profile-picture">
                        {/* Add profile picture here */}
                        <img src="your-profile-picture-url.jpg" alt="Profile" />
                    </div>
                    <h3>Your Reviews:</h3>
                    <div className="user-reviews">
                        {userReviews.map((review) => (
                            <div key={review._id} className="review-container">
                                <Review reviewData={review} hideReportButton />
                                <button className="delete-review-button" onClick={() => handleDeleteReview(review._id)}>
                                    Delete Review
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <p>Please sign in to view your profile.</p>
            )}
        </div>
    );
};

export default ProfilePage;
