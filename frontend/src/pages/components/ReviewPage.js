// Reusable Review Page that takes a dorm (name) and type (freshman/sophomore/upperclass)
// and generates a review page for that dorm

// All dorm images should be decently wide
// Also, they should all be in jpg format in the images folder

// The image positioning kinda sucks bc it's absolute positioning of text over the image

import React from 'react';

const ReviewPage = ({dorm, type}) => {

    let img_path = dorm+".jpg";

    return (
        
        <div class="body">

        <div class="left-panel">
            <img src={require(`../../images/${img_path}`)} alt = "Outside of dorm" className="dorm-image" />

            <div class="custom-heading"><b> {dorm} Reviews </b></div>

            <div class="custom-heading3"><b>

                <br></br>

                <p>Rating goes here</p>

                <p>Dorm Type: {type}</p>

            </b></div>

            <div class="photos-button"><b> See Photos </b></div>
        </div>

        </div>
    );
}


export default ReviewPage;