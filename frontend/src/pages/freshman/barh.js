import React, { useEffect, useRef } from 'react';
import ReviewPage from "../components/ReviewPage"
import Review from '../components/Review';
import '../components/Review.css';


const Barh = () => {
    const reviewContainer = useRef(null);

    useEffect(() => {
        const sampleReview = {
            overallRating: 4.5,
            date: "October 25, 2023", 
            review: "The place was amazing, especially the view from the room. Could be a bit cleaner though.",
            ratings: {
                building: 5,
                room: 4,
                location: 5,
                cleanliness: 4
            },
        };

        const reviewInstance = new Review(reviewContainer.current);
        reviewInstance.update(sampleReview); 
    }, []);
    
    return (
        <div>
            <ReviewPage dorm_id='BARH' />
            
            <div ref={reviewContainer}></div>
        </div>
    )
}

export default Barh;
