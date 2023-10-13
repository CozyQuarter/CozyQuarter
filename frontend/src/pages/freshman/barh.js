// Barh.js
// (Changed name from BARHReviewPage.js to Barh.js, to keep consistency across all dorm name styles)

// Needs to be modified to use the ReviewPage component.
// All authentication code should be moved to a different file

import React, { useState, useEffect } from 'react';
import dorm3 from '../../images/dorm3.jpg';
import rpi_logo from '../../images/rpi_logo.png';
import { useAuth } from '../../context/authContext';

const Barh = () => {
  const { isAuthenticated, user, signInWithGoogle } = useAuth();
  const [reviewData, setReviewData] = useState({
    rating: '',
    comment: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isAuthenticated) {
      const shouldSignIn = window.confirm(
        'To submit a review, please sign in with Google. Do you want to sign in now?'
      );

      if (shouldSignIn) {
        try {
          await signInWithGoogle();
        } catch (error) {
          console.error('Error signing in with Google:', error);
        }
      }
    } else {
      // Handle review submission for authenticated users
      console.log('Submitting review:', reviewData);
      // Add your logic to submit the review
    }
  };

  useEffect(() => {
    // Fetch and display reviews logic can be implemented here
    //  may want to fetch and display reviews when the component mounts
    // Example: fetchReviews();
  }, []);

  return (
    <div>
      <div className="panels">
        <div className="left-panel">
          <div className="custom-heading">
            <b>BARH Dormitory Reviews</b>
          </div>
          {isAuthenticated && <p>Hi, {user.displayName}!</p>}
          <p>
            Welcome to the BARH Dormitory Review Page, where students can share their experiences and thoughts about BARH.
          </p>
        </div>
        <div className="right-panel">
          <img src={dorm3} alt="Students in a dorm room" className="responsive-image" />
        </div>
      </div>

      {isAuthenticated && (
        <div className="panels">
          <div className="left-panel">
            <div className="custom-heading2">
              <b>Submit Your Review</b>
            </div>

            <form id="reviewForm" onSubmit={handleSubmit}>
              <label htmlFor="rating">Rating (1-5):</label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={reviewData.rating}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                value={reviewData.comment}
                onChange={handleInputChange}
                required
              ></textarea>

              <button type="submit">Submit Review</button>
            </form>
          </div>

          <div className="right-panel">
            <img src={rpi_logo} alt="RPI Logo" className="responsive-image" />
          </div>
        </div>
      )}

      <div className="panels">
        <div className="left-panel">
          <div className="custom-heading2">
            <b>Latest Reviews</b>
          </div>
          {/* Add logic to fetch and display reviews here */}
        </div>
      </div>

      {!isAuthenticated && (
        <div className="panels">
          <div className="left-panel">
            <p>
              To submit a review, please sign in with Google. If you don't have an account, you can continue as a guest and view existing reviews.
            </p>
            <button className="signin-button" onClick={signInWithGoogle}>Sign In with Google</button>
            <p>or</p>
            <button className="signin-button"> Continue as Guest</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Barh;
