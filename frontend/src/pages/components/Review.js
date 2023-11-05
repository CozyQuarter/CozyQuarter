import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, Paper, Rating , Button } from '@mui/material';
import './Review.css';

const getRatingColor = (ratingValue) => {
    if (ratingValue >= 1 && ratingValue <= 3) {
        return 'red';
    } else if (ratingValue >= 3 && ratingValue <= 5) {
        return 'yellow';
    } else if (ratingValue === 5) {
        return 'green';
    } else {
        return 'transparent'; // Default color
    }
};

const Review = ({ reviewData }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedReasons, setSelectedReasons] = useState([]);
    const [details, setDetails] = useState('');
  
    const reasons = [
      'Offensive language',
      'Inappropriate content',
      'Spam',
      'Other'
    ];
  
    const handleReport = () => {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_name: 'Cozy Quarter',
        from_name: 'Review Reporting System',
        message: `Review with ID: ${reviewData.id} has been reported for the following reasons: ${selectedReasons.join(', ')}. Additional details: ${details}`,
        to_email: 'cozyquarterco@gmail.com',
      }, 'YOUR_USER_ID')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
  
      setModalOpen(false);
      setSelectedReasons([]);
      setDetails('');
    };

    return (
        <Paper className="review-component">
          <div className="review-date">{reviewData.date}</div>
          <div className="overall-rating">
            <Typography variant="subtitle1">Overall</Typography>
            <Box className="rating-box" bgcolor={getRatingColor(reviewData.overallRating)}>
              {reviewData.overallRating.toFixed(1)}
            </Box>
            <Rating
              name="overall-rating"
              value={reviewData.overallRating}
              precision={0.1}
              readOnly
            />
          </div>
          <div className="review-content-container">
            <div className="review-content">
              <Typography variant="body1">{reviewData.reviewText}</Typography>
            </div>
            <div className="category-ratings">
                <div className="category">
                    Building:
                    <Rating name="building-rating" value={reviewData.buildingRating} precision={0.1} readOnly />
                </div>
                <div className="category">
                    Location:
                    <Rating name="location-rating" value={reviewData.locationRating} precision={0.1} readOnly />
                </div>
            </div>
            <div className="category-ratings">
                    <div className="category">
                        Room:
                        <Rating name="room-rating" value={reviewData.roomRating} precision={0.1} readOnly />
                    </div>
                    <div className="category">
                        Cleanliness:
                        <Rating name="cleanliness-rating" value={reviewData.cleanlinessRating} precision={0.1} readOnly />
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
          </div>
        </Paper>
    );
};

export default Review;
