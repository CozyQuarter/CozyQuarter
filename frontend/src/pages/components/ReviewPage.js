// Reusable Review Page that takes a dorm (name) and type (freshman/sophomore/upperclass)
// and generates a review page for that dorm

// DORM IMAGE FORMAT:
// Cropped to 16:9 (width 16, height 9)
// In the images folder, as a .png file
// named [Dorm].png, capitalized (in the exact same format as the dorm class name)

import React from 'react';
import './ReviewPage.css'

const ReviewPage = ({dorm, type, img_name}) => {

    let img_path = img_name+".png";

    return (
        <div class = "body">
        {/* Header of screen - average reviews and photo */}
        <div class="panels">
        <div class="left-panel2">
            <div class="custom-heading1"><b> {dorm}</b> Reviews </div>

            <div class="custom-heading3">

                <p>Dorm Type: {type}</p>
                <p>[overall rating]</p>

            </div>

            <div class="body">
                <p>Building: [stars]</p>
                <p>Room: [stars]</p>
                <p>Location: [stars]</p>
                <p>Cleanliness: [stars]</p>
            </div>
        </div>
        <div className = "right-panel2">
            <img src={require(`../../images/${img_path}`)} alt = "Outside of dorm" className="dorm-image" />
            <div class="photos-button"><b> See Photos </b></div>
        </div>
        </div>

        {/* Body of screen - list of reviews and "write review" */}
        <div class="left-panel">

            <div class="custom-heading3">
                <b>Browse Reviews</b>
            </div>

        </div>
        </div>

    );
}


export default ReviewPage;