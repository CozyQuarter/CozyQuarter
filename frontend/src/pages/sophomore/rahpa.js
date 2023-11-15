/**
 * RahpA Component
 * 
 * This component represents the dormitory review page for 'RahpA'.
 * It renders the 'ReviewPage' component with the dormitory ID 'RahpA'.
 */
import React from 'react';
import ReviewPage from "../components/ReviewPage"

const RahpA = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="RahpA">
            </ReviewPage>

        </div>
    )
}

export default RahpA;