/**
 * Davidson Component
 * 
 * This component represents the dormitory review page for 'Davidson'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Davidson'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Davison = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Davison">
            </ReviewPage>

        </div>
    )
}

export default Davison;