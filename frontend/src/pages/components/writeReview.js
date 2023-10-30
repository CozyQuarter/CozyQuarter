import React, { useContext, useState } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import ReviewPage from './ReviewPage';
import { useParams } from 'react-router-dom';
import './writeReview.css';


const WriteReview = () => {

    const { dorm_id } = useParams();
    console.log('Received dormId:', dorm_id); // Add this line to log dormId
    const [buildingRating, setBuildingRating] = useState(0);
    const [roomRating, setRoomRating] = useState(0);
    const [locationRating, setLocationRating] = useState(0);
    const [cleanlinessRating, setCleanlinessRating] = useState(0);
    const [overallRating, setOverallRating] = useState(0); // Calculate this based on other ratings
    const [reviewText, setReviewText] = useState('');

    const authContext = useContext(AuthContext);

    // Calculate overallRating based on other ratings
    const calculateOverallRating = () => {
        // You can calculate the overall rating based on the ratings of different sections.
        // For example, you can take an average of all ratings.
        const averageRating = ((buildingRating + roomRating + locationRating + cleanlinessRating) / 4);
        setOverallRating(averageRating);
    };

    const handleReviewSubmit = () => {
        const { currentUser } = authContext;
        // Ensure currentUser is available
        if (currentUser) {
            const reviewData = {
                user: currentUser.uid, // Use currentUser's ID
                buildingRating,
                roomRating,
                locationRating,
                cleanlinessRating,
                overallRating,
                reviewText,
                dorm_id: dorm_id, // Assuming you send the dorm ID from the front-end
                email: currentUser.email, // Add the user's email

            };

            // Send a POST request to your API to create the review using fetch
            fetch('http://localhost:8000/api/submitReview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then((data) => {
                    // Handle success
                    console.log('Review submitted successfully', data);
                })
                .catch((error) => {
                    // Handle error
                    console.error('Error submitting review:', error);
                    console.error('current dorm id', dorm_id);
                });
        }
    };


    return (
        <div className="writeReviewContainer">
            <h2>Write a Review</h2>
            <div className="review-section">
            <h3>Building Rating</h3>
            <Rating
                name="building-rating"
                value={buildingRating}
                precision={1}
                onChange={(event, newValue) => {
                    setBuildingRating(newValue);
                    calculateOverallRating();
              }}
            />
        </div>

        <div className="review-section">
            <h3>Room Rating</h3>
            <Rating
                name="room-rating"
                value={roomRating}
                precision={1}
                onChange={(event, newValue) => {
                    setRoomRating(newValue);
                    calculateOverallRating();
                }}
            />
        </div>

        <div className="review-section">
            <h3>Location Rating</h3>
            <Rating
                name="location-rating"
                value={locationRating}
                precision={1}
                onChange={(event, newValue) => {
                    setLocationRating(newValue);
                    calculateOverallRating();
                }}
            />
        </div>

        <div className="review-section">
            <h3>Cleanliness Rating</h3>
            <Rating
                name="cleanliness-rating"
                value={cleanlinessRating}
                precision={1}
                onChange={(event, newValue) => {
                    setCleanlinessRating(newValue);
                    calculateOverallRating();
                }}
            />
        </div>

        <div className="review-section">
            <h3>Overall Rating</h3>
            <Rating name="overall-rating" value={overallRating} precision={0.1} readOnly />
        </div>

        <div className="review-section">
            <h3>Write Your Review</h3>
            <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={4}
            cols={50}
            />
        </div>
            <button className="submit-button" onClick={handleReviewSubmit}>Submit Review</button>
        </div>
    );
};

export default WriteReview;
