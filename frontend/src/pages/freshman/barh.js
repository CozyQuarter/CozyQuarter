import React, { useState } from 'react';
import dorm3 from './dorm3.jpg';  // Make sure to import the image
import rpi_logo from './rpi_logo.png'
import useAuth from '../../hooks/useAuth';


const BARHReviewPage = () => {
    const { user, isAuthenticated } = useAuth(); // Assuming you have a useAuth hook or context

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
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!isAuthenticated) {
        // You can show an alert or redirect to the login page
        alert('Please log in to submit a review.');
        return;
      }
    }

  return (
    <div>
      <div className="panels">
        <div className="left-panel">
          <div className="custom-heading">
            <b>BARH Dormitory Reviews</b>
          </div>
          <p>
            Welcome to the BARH Dormitory Review Page, where students can share their experiences and thoughts about BARH.
            This page allows you to submit your review and view reviews from other students.
          </p>
        </div>
        <div className="right-panel">
          <img src={dorm3} alt="Students in a dorm room" className="responsive-image"/>
        </div>
      </div>

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
          <img src={rpi_logo} alt="RPI Logo" className="responsive-image"/>
        </div>
      </div>

      <div className="panels">
        <div className="left-panel">
          <div className="custom-heading2">
            <b>Latest Reviews</b>
          </div>

          {/* Add logic to fetch and display reviews here */}
        </div>
      </div>
    </div>
  );
}

export default BARHReviewPage;
