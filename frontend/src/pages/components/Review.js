/**
 * Review Component
 * 
 * The Review component displays a user review with detailed information, including ratings for various categories like building, room, location, and cleanliness. 
 * It also provides an optional reporting feature for reporting inappropriate content in a review.
 * 
 * Helper Functions:
 * - getOverallRatingBoxColor: Determines the background color of the overall rating box based on the rating value. It uses a color-coded system to indicate the review's overall quality.
 * - handleReport: Handles the process of reporting a review. It uses emailjs-com to send a report email with the selected reasons and details.
 * - renderReportButton: Conditionally renders the report button based on the 'hideReportButton' prop. If 'hideReportButton' is set to true, the button is not rendered.
 * 
 * Dependencies:
 * - React: The component is built using React.
 * - emailjs-com: Used for sending email notifications when reporting a review.
 * - MUI components (Box, Typography, Paper, Rating, Button) for styling.
 * - Custom CSS styles ('./Review.css') for component-specific styling.
 * 
 * Exported Component:
 * - Review
 * 
 */

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, Paper, Rating, Button } from '@mui/material';
import './Review.css';

const Review = ({ reviewData, hideReportButton  }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedReasons, setSelectedReasons] = useState([]);
    const [details, setDetails] = useState('');

    const reasons = [
        'Offensive language',
        'Inappropriate content',
        'Spam',
        'Other',
    ];

    const handleReport = () => {
        emailjs
            .send('service_fejaqky', 'template_non52vq', {
                to_name: 'Cozy Quarter',
                from_name: 'Review Reporting System',
                review_id: reviewData._id,
                reasons: selectedReasons.join(', '),
                details: details,
                to_email: 'cozyquarterco@gmail.com',
            }, 'eVMVEPjKWovC9tqCP')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setModalOpen(false);
        setSelectedReasons([]);
        setDetails('');
    };
        // Conditional rendering for the report button
        const renderReportButton = () => {
            if (hideReportButton) {
                return null; // Don't render the report button
            }
    
            return (
                <Button className="report-button" onClick={() => setModalOpen(true)}>
                    Report
                </Button>
            );
        };
    const getOverallRatingBoxColor = (rating) => {
      if (rating > 0 && rating < 3) {
          return 'red';
      } else if (rating >= 3 && rating < 5) {
          return 'yellow';
      } else if (rating === 5) {
          return 'green';
      }
      return 'transparent'; // Default color
  };


  const ratingBoxStyle = {
      backgroundColor: getOverallRatingBoxColor(reviewData.overallRating),
  };

    return (
        <div className="review-component">
            <div className="review-date">{reviewData.date}</div>
            <div className="overall-rating">
                <span>Overall</span>
                <span className="rating-value" style={ratingBoxStyle}>
                    {reviewData.overallRating.toFixed(1)}
                </span>
                <Rating
                    name="overall-rating"
                    value={reviewData.overallRating}
                    precision={0.1}
                    readOnly
                    style={{ color: '#000' }} 

                />
            </div>
            <div className="review-content-container">
                <div className="review-content">
                    <p>{reviewData.reviewText}</p>
                </div>
                <div className="review-details">
                    <div className="category-rating">
                        Building:
                        <div className="stars" data-category="building">
                            <Rating
                                name="building-rating"
                                value={reviewData.buildingRating}
                                precision={0.1}
                                readOnly
                                style={{ color: '#000' }} 

                            />
                        </div>
                    </div>
                    <div className="category-rating">
                        Room:
                        <div className="stars" data-category="room">
                            <Rating
                                name="room-rating"
                                value={reviewData.roomRating}
                                precision={0.1}
                                readOnly
                                style={{ color: '#000' }} 

                            />
                        </div>
                    </div>
                    <div className="category-rating">
                        Location:
                        <div className="stars" data-category="location">
                            <Rating
                                name="location-rating"
                                value={reviewData.locationRating}
                                precision={0.1}
                                readOnly
                                style={{ color: '#000' }} 

                            />
                        </div>
                    </div>
                    <div className="category-rating">
                        Cleanliness:
                        <div className="stars" data-category="cleanliness">
                            <Rating
                                name="cleanliness-rating"
                                value={reviewData.cleanlinessRating}
                                precision={0.1}
                                readOnly
                                style={{ color: '#000' }} 

                            />
                        </div>
                    </div>
                </div>
            </div>
            {hideReportButton ? null : (
                <button className="report-button" onClick={() => setModalOpen(true)}>REPORT</button>
            )}           
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Report Review</h2>
                        {reasons.map(reason => (
                            <div key={reason}>
                                <input
                                    type="checkbox"
                                    name="reason"
                                    value={reason}
                                    checked={selectedReasons.includes(reason)}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            setSelectedReasons(prevReasons => [...prevReasons, reason]);
                                        } else {
                                            setSelectedReasons(prevReasons => prevReasons.filter(r => r !== reason));
                                        }
                                    }}
                                />
                                <label>{reason}</label>
                            </div>
                        ))}
                        <textarea
                            placeholder="Additional details (optional)"
                            value={details}
                            onChange={e => setDetails(e.target.value)}
                        />
                        <div className="button-group">
                            <button className="submit-cancel-button" onClick={handleReport}>Submit</button>
                            <button className="submit-cancel-button" onClick={() => setModalOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Review;
