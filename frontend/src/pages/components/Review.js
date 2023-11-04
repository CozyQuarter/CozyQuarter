import React from 'react';
import { Box, Typography, Paper, Rating } from '@mui/material';
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
                </div>
            </div>
        </Paper>
    );
};

export default Review;
