/**
 * Cary Component
 * 
 * This component represents the dormitory review page for 'Cary'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Cary'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Cary = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id = "Cary">
            </ReviewPage>

        </div>
    )
}

export default Cary;