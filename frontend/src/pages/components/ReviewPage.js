// Reusable Review Page that takes a dorm (name) and type (freshman/sophomore/upperclass)
// and generates a review page for that dorm

// DORM IMAGE FORMAT:
// Cropped to 16:9 (width 16, height 9)
// In the images folder, as a .png file
// named [Dorm].png, capitalized (in the exact same format as the dorm class name)

import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewPage.css'
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { useAuth } from '../../context/authContext';


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


  let img_path = dorm_id + ".png";
  console.log('DORM ID IS: ', dorm_id);
  // Find dorm
  var dorm = dorms.filter(d => {
    return d.id.toLowerCase() === dorm_id.toLowerCase()
  })
  dorm = dorm[0];


  // Format single, double, triple rooms
  let singles = "-";
  if (dorm.single_price < Infinity) {
    singles = "$" + dorm.single_price;
  }
  let doubles = "-";
  if (dorm.double_price < Infinity) {
    doubles = "$" + dorm.double_price;
  }
  let triples = "-";
  if (dorm.triple_price < Infinity) {
    triples = "$" + dorm.triple_price;
  }

  const { currentUser } = useAuth();

  return (
    <div class="body">
      {/* Header of screen - average reviews and photo */}
      <div class="panels">
        <div class="left-panel2">
          <div class="custom-heading1"><b> {dorm.name}</b> Reviews </div>

          <div class="body">

            <p><b>Year:</b> {dorm.year} &nbsp; <b>Room Type:</b> {dorm.room_type}</p>
            <p><b>Room Prices:</b> Single: {singles} &nbsp; Double: {doubles} &nbsp; Triple: {triples}</p>

          </div>

          <h3 className="custom-heading3"><em><span class="highlight-red"> &nbsp;Average Rating:&nbsp; </span></em> &nbsp;
            <OverallRating defaultValue={4.5} precision={0.5} readOnly /></h3>

          <div class="body">
            <p><b><em>Building:</em></b> &nbsp;
              <SubRating readOnly size='small' /> &nbsp; &nbsp;&nbsp;

              <b><em>Room:</em></b> &nbsp;
              <SubRating readOnly size='small' /></p>

            <p><b><em>Location:</em></b> &nbsp;
              <SubRating readOnly size='small' />  &nbsp; &nbsp;

              <b><em>Cleanliness:</em></b> &nbsp;
              <SubRating readOnly size='small' /></p>
          </div>

        </div>
        <div className="right-panel2">
          <img src={require(`../../images/${img_path}`)} alt="Outside of dorm" className="dorm-image" />
          <div class="photos-button"><b> See Photos </b></div>
        </div>
      </div>

      {/* Browse Reviews and Write Review button */}
      <div class="panels">
        <div class="left-panel">

          <div class="custom-heading3">
            <b>Browse Reviews</b>
          </div>

        </div>
        <div className="right-panel">
          {!currentUser ? ( // If the user is not signed in, show "Sign In to Write Reviews" button
            <Link to="/sign-in" className="write-review-button">
              Sign In to Write Reviews
            </Link>
          ) : (
            // If the user is signed in, show "Write a Review" button
            <Link to={`/writeReview/${dorm_id}`} className="write-review-button">
              Write a Review
            </Link>

          )}        </div>
      </div>

      <div class="left-panel">
        Reviews go here
      </div>
    </div>

  );
}


export default ReviewPage;