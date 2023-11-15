/**
 * North Component
 * 
 * This component represents the dormitory review page for 'North'.
 * It renders the 'ReviewPage' component with the dormitory ID 'North'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const North = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="North">
            </ReviewPage>

        </div>
    )
}

export default North;