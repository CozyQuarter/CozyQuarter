/**
 * RahpB Component
 * 
 * This component represents the dormitory review page for 'RahpB'.
 * It renders the 'ReviewPage' component with the dormitory ID 'RahpB'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const RahpB = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="RahpB">
            </ReviewPage>

        </div>
    )
}

export default RahpB;