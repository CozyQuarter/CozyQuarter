import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, Paper, Rating, Button } from '@mui/material';
import './Review.css';

const Review = ({ reviewData }) => {
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
                message: `Review with ID: ${reviewData.id} has been reported for the following reasons: ${selectedReasons.join(
                    ', '
                )}. Additional details: ${details}`,
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
            <Button className="report-button" onClick={() => setModalOpen(true)}>Report</Button>
            {modalOpen && (
                <div className="modal">
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
                    <button onClick={handleReport}>Submit</button>
                    <button onClick={() => setModalOpen(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Review;
