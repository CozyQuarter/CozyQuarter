/**
 * Hall Component
 * 
 * This component represents the dormitory review page for 'Hall'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Hall'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Hall = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Hall">
            </ReviewPage>

        </div>
    )
}

export default Hall;