/**
 * Warren Component
 * 
 * This component represents the dormitory review page for 'Warren'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Warren'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Warren = () => {

    return (
        <div>
            <ReviewPage
            dorm_id="Warren">
            </ReviewPage>

        </div>
    )
}

export default Warren;