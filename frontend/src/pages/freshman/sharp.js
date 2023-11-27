/**
 * Sharp Component
 * 
 * This component represents the dormitory review page for 'Sharp'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Sharp'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Sharp = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Sharp">
            </ReviewPage>

        </div>
    )
}

export default Sharp;