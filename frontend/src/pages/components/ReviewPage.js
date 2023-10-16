// Reusable Review Page that takes a dorm (name) and type (freshman/sophomore/upperclass)
// and generates a review page for that dorm

// DORM IMAGE FORMAT:
// Cropped to 16:9 (width 16, height 9)
// In the images folder, as a .png file
// named [Dorm].png, capitalized (in the exact same format as the dorm class name)

import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';


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

const ReviewPage = ({dorm, type, img_name}) => {

    let img_path = img_name+".png";

    return (
        
        <div class="body">

        <div class="left-panel">
            <img src={require(`../../images/${img_path}`)} alt = "Outside of dorm" className="dorm-image" />

            <div class="custom-heading1"><b> {dorm}</b> Reviews </div>

            <div class="custom-heading3">

                <p>Dorm Type: {type}</p>
                <p> Overall:<OverallRating defaultValue={4.5} precision={0.5} readOnly/></p>

            </div>

            <div class="body">
                <p>Building:    <SubRating readOnly size='small'/></p>
                <p>Room:        <SubRating readOnly size='small'/></p>
                <p>Location:    <SubRating readOnly size='small'/></p>
            </div>

            <div class="photos-button"><b> See Photos </b></div>
        </div>

        <div class="left-panel">

            <div class="custom-heading3">
                <b>Browse Reviews</b>
            </div>

        </div>

        </div>
    );
}


export default ReviewPage;