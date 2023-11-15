/**
 * Nugent Component
 * 
 * This component represents the dormitory review page for 'Nugent'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Nugent'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Nugent = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Nugent">
            </ReviewPage>

        </div>
    )
}

export default Nugent;