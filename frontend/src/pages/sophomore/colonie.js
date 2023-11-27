/**
 * Colonie Component
 * 
 * This component represents the dormitory review page for 'Colonie'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Colonie'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Colonie = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Colonie">
            </ReviewPage>

        </div>
    )
}

export default Colonie;