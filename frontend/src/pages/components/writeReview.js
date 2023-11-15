/**
 * Write Review Component
 * 
 * A React component that allows users to write and submit reviews for a dormitory.
 * It includes sections for rating different aspects and providing a written review.
 * 
 * Dependencies:
 * - React: For creating and rendering the component.
 * - Rating component from '@mui/material/Rating': For displaying and capturing ratings.
 * - axios: For making HTTP requests to submit the review.
 * - AuthContext from '../../context/authContext': For accessing user authentication information.
 * - ReviewPage component: For navigation after successful review submission.
 * - useParams, Link, and useNavigate from 'react-router-dom': For routing and navigation.
 * - CSS styles from './writeReview.css': For styling the component.
 * 
 * Exported Component:
 * - WriteReview: A React component for writing and submitting reviews.
 */

import React, { useContext, useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import ReviewPage from './ReviewPage';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    // Calculate overallRating based on other ratings with proper precision
    const calculateOverallRating = () => {
        const ratings = [buildingRating, roomRating, locationRating, cleanlinessRating];
        const precision = 0.1; // Set your desired precision

        // Debug prints for individual ratings
        console.log('Building Rating:', buildingRating);
        console.log('Room Rating:', roomRating);
        console.log('Location Rating:', locationRating);
        console.log('Cleanliness Rating:', cleanlinessRating);

        // Calculate overall rating based on individual ratings and precision
        const sum = ratings.reduce((acc, rating) => {
            const roundedRating = Math.round(rating / precision) * precision;
            console.log('Rounded Rating:', roundedRating);
            return acc + roundedRating;
        }, 0);

        const averageRating = sum / ratings.length;
        console.log('Overall Rating:', averageRating);

        setOverallRating(averageRating);
    };
    // Use useEffect to recalculate overallRating whenever cleanlinessRating changes
    useEffect(() => {
        calculateOverallRating();
    }, [cleanlinessRating]);


    const handleReviewSubmit = () => {
        calculateOverallRating();

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

            }

            // Determine the API URL based on the environment
            const apiUrl = process.env.NODE_ENV === 'production'
                ? 'https://cozyquarter-9251ad96e93b.herokuapp.com/api/submitReview'
                : 'http://localhost:8000/api/submitReview';

            // Send a POST request to your API to create the review using fetch                   
            fetch(apiUrl, {
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
                    // navigate('/ReviewPage/${dorm_id}');
                    navigate(-1);

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
            <p> Before writing a review, make sure to follow the guidelines
                listed on the <Link to="/Rules/"> Rules Page</Link>.
            </p>
            <div className="review-section">
                <h3>Building Rating</h3>
                <Rating
                    name="building-rating"
                    value={buildingRating}
                    precision={0.1}
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
                    precision={0.1}
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
                    precision={0.1}
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
                    precision={0.1}
                    onChange={(event, newValue) => {
                        setCleanlinessRating(newValue);
                        calculateOverallRating();
                    }}
                />
            </div>

            <div className="review-section">
                <h3>Overall Rating</h3>

                <Rating name="overall-rating" value={overallRating} precision={1} readOnly />
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
