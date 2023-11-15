/**
 * Barton Component
 * 
 * This component represents the dormitory review page for 'Barton'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Barton'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Barton = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id = "Barton">
            </ReviewPage>

        </div>
    )
}

export default Barton;