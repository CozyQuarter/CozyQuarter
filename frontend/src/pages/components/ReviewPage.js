/**
 * WriteReview Component
 * 
 * The WriteReview component allows users to submit reviews for dormitories. Users can rate various aspects of the dorm, write a review, and submit it.
 * 
 * Dependencies:
 * - React: The component is built using React.
 * - MUI components (Box, Typography, Rating, Link) for styling.
 * - Context API (AuthContext) for managing user authentication.
 * - Axios for making HTTP requests to submit reviews.
 * - React Router (useParams, useNavigate, Link) for navigation within the application.
 * - Custom CSS styles ('./writeReview.css') for component-specific styling.
 * 
 * Exported Component:
 * - WriteReview
 * 
 * Component Structure:
 * - Allows users to rate various aspects (building, room, location, cleanliness) using star ratings.
 * - Calculates an overall rating based on individual ratings with a specified precision.
 * - Sends a POST request to the API with the review data for submission.
 * - Provides user feedback and error handling for successful and unsuccessful submissions.
 * 
 * DORM IMAGE FORMAT:
 * - Cropped to 16:9 (width 16, height 9)
 * - In the images folder, as a .png file
 * - Named [Dorm].png, capitalized (in the exact same format as the dorm class name)
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReviewPage.css'
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { useAuth } from '../../context/authContext';
import Review from './Review';

const OverallRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const SubRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const dorms = [
	{ id: 'BARH', name: 'BARH', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Suite' },
	{ id: 'Barton', name: 'Barton Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: Infinity, double_price: Infinity, triple_price: 9790, room_type: 'Suite, Traditional' },
	{ id: 'Bray', name: 'Bray Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional' },
	{ id: 'Cary', name: 'Cary Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional' },
	{ id: 'Crockett', name: 'Crockett Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional' },
	{ id: 'Davison', name: 'Davison Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite' },
	{ id: 'Hall', name: 'Hall Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional' },
	{ id: 'Nason', name: 'Nason Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Traditional' },
	{ id: 'Nugent', name: 'Nugent Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite' },
	{ id: 'Sharp', name: 'Sharp Hall', folder: 'Freshman', year: 'Freshman, Arch', single_price: 10720, double_price: Infinity, triple_price: Infinity, room_type: 'Suite' },
	{ id: 'Warren', name: 'Warren Hall', folder: 'Freshman', year: 'Freshman', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite' },

	{ id: 'Blitman', name: 'Blitman', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Suite' },
	{ id: 'Bryckwyck', name: 'Bryckwyck', folder: 'Sophomore', year: 'Sophomore', single_price: 8540, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment' },
	{ id: 'Colonie', name: 'Colonie', folder: 'Sophomore', year: 'Sophomore', single_price: Infinity, double_price: 9120, triple_price: Infinity, room_type: 'Suite' },
	{ id: 'EComplex', name: 'E-Complex', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Traditional' },
	{ id: 'North', name: 'North Hall', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: Infinity, room_type: 'Traditional' },
	{ id: 'Quad', name: 'Quadrangle', folder: 'Sophomore', year: 'Sophomore, Arch', single_price: 10720, double_price: 9460, triple_price: 8270, room_type: 'Suite, Traditional' },
	{ id: 'RAHPA', name: 'RAHP-A', folder: 'Sophomore', year: 'Sophomore', single_price: 8540, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment' },
	{ id: 'RAHPB', name: 'RAHP-B', folder: 'Sophomore', year: 'Sophomore', single_price: 8540, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment' },
	{ id: 'Stacwyck', name: 'Stacwyck', folder: 'Sophomore', year: 'Sophomore', single_price: 10290, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment' },

	{ id: 'CityStationWest', name: 'City Station West', folder: 'Upperclass', year: 'Upperclass', single_price: 10290, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment' },
	{ id: 'Polytechnic', name: 'Polytechnic', folder: 'Upperclass', year: 'Upperclass', single_price: 10290, double_price: Infinity, triple_price: Infinity, room_type: 'Apartment' },
];

const ReviewPage = ({ dorm_id }) => {
    const [reviews, setReviews] = useState([]);
    const [averageRatings, setAverageRatings] = useState({
        overallRating: 0,
        buildingRating: 0,
        roomRating: 0,
        locationRating: 0,
        cleanlinessRating: 0,
        totalReviews: 0,
    });
    const { currentUser } = useAuth();

    const API_BASE_URL = process.env.NODE_ENV === 'production' ?
        'https://cozyquarter-9251ad96e93b.herokuapp.com' :
        'http://localhost:8000';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${API_BASE_URL}/api/getReviews/${dorm_id}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                setReviews(data.reviews);

                const avgRatingsResponse = await fetch(`${API_BASE_URL}/api/getDormAvgRatings/${dorm_id}`);
                const avgRatingsData = await avgRatingsResponse.json();
                setAverageRatings(avgRatingsData.averageRatings);

            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchData();
    }, [dorm_id]);

    const [sortType, setSortType] = useState('ascending');
    const [sortByField] = useState("overallRating");
    const [result, setResult] = useState();
    const [state, setstate] = useState({
        query: '',
        list: reviews
    });

    function sortFunc(results, sortType, sortByField) {
        if (sortType === 'ascending') {
            results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1);
        } else if (sortType === 'descending') {
            results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1);
        }
        return results;
    }

    function sortOrder(e) {
        setSortType(e);
        setstate({
            query: state.query,
            list: !result ? sortFunc(reviews, e, sortByField) : sortFunc(result, e, sortByField)
        });
    }

    let img_path = dorm_id + ".png";
    var dorm = dorms.filter(d => d.id.toLowerCase() === dorm_id.toLowerCase());
    dorm = dorm[0];

    const singles = dorm.single_price < Infinity ? `$${dorm.single_price}` : '-';
    const doubles = dorm.double_price < Infinity ? `$${dorm.double_price}` : '-';
    const triples = dorm.triple_price < Infinity ? `$${dorm.triple_price}` : '-';

	return (
		<div className="body">
		  {/* Header of screen - average reviews and photo */}
		  <div className="panels">
			<div className="left-panel2">
			  <div className="custom-heading1">
				<b> {dorm.name}</b> Reviews 
			  </div>
	
			  {reviews && reviews.length > 0 && (
				<>
				  <h3 className="custom-heading3">
					<em>
					  <span className="highlight-red"> &nbsp;Overall:&nbsp; </span>
					</em> &nbsp;
					<OverallRating value={averageRatings.overallRating} precision={0.5} readOnly/>
					<span> {averageRatings.overallRating.toFixed(2)} </span>
					<span>
					  ({averageRatings.totalReviews ? averageRatings.totalReviews : 0} {averageRatings.totalReviews === 1 ? 'review' : 'reviews'})
					</span>
				  </h3>
	
				  <div className="body">
					<p>
					  <b><em>Building:</em></b> &nbsp;
					  <SubRating value={averageRatings.buildingRating} readOnly size="small" /> &nbsp; &nbsp;&nbsp;
					  <b><em>Room:</em></b> &nbsp;
					  <SubRating value={averageRatings.roomRating} readOnly size='small' />
					</p>
	
					<p>
					  <b><em>Location:</em></b> &nbsp;
					  <SubRating value={averageRatings.locationRating} readOnly size='small' />  &nbsp; &nbsp;
					  <b><em>Cleanliness:</em></b> &nbsp;
					  <SubRating value={averageRatings.cleanlinessRating} readOnly size='small' />
					</p>
				  </div>
				</>
			  )}
	
			  <p><b>Year:</b> {dorm.year} &nbsp; <b>Room Type:</b> {dorm.room_type}</p>
			  <p><b>Room Prices:</b> Single: {singles} &nbsp; Double: {doubles} &nbsp; Triple: {triples}</p>
			</div>
	
			<div className="right-panel2">
			  <img src={require(`../../images/${img_path}`)} alt="Outside of dorm" className="dorm-image" />
			  <div className="photos-button"><b> See Photos </b></div>
			</div>
		  </div>
	
		  {/* Browse Reviews and Write Review button */}
		  <div className="panels">
			<div className="left-panel">
			  <span className="custom-heading3"> <b>Browse Reviews</b> </span>
	
			  {/* Sort order ascending/descending */}
			  <span className="margin">Sort By </span>
			  <select className="dropdown-menu-behind" defaultValue={'ascending'} onChange={(e) => sortOrder(e.target.value)}>
				<option value="ascending" disabled>None</option>
				<option value="ascending">Lowest Ratings First</option>
				<option value="descending">Highest Ratings First</option>
			  </select>
			</div>
	
			<div className="right-panel">
			  {!currentUser ? (
				<Link to="/sign-in" className="write-review-button">
				  Sign In to Write Reviews
				</Link>
			  ) : (
				<Link to={`/writeReview/${dorm_id}`} className="write-review-button" onClick={() => window.scroll(0, 0)}>
				  Write a Review
				</Link>
			  )}
			</div>
		  </div>
	
		  <div className="left-panel">
			{reviews && reviews.length > 0 ? (
			  reviews.map((review, index) => (
				<Review key={index} reviewData={review} />
			  ))
			) : (
			  <p>No reviews available for this dorm.</p> // Display a message when there are no reviews
			)}
		  </div>
		</div>
	  );
	};
	
	export default ReviewPage;