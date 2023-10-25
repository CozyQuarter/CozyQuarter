import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/authContext';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    // Fetch user-specific reviews
    const fetchUserReviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getUserReviews', {
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

  return (
    <div>
      <h2>Profile Page</h2>
      {currentUser ? (
        <div>
          <h3>Welcome, {currentUser.displayName}!</h3>
          <p>Email: {currentUser.email}</p>
          <h3>Your Reviews:</h3>
          <ul>
            {userReviews.map((review) => (
              <li key={review._id}>
                <p>Review for {review.dormName}</p>
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default ProfilePage;
