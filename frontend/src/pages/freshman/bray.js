/**
 * Bray Component
 * 
 * This component represents the dormitory review page for 'Bray'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Bray'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Bray = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id= "Bray">
            </ReviewPage>

        </div>
    )
}

export default Bray;