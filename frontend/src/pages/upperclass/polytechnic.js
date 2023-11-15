/**
 * Polytechnic Component
 * 
 * This component represents the dormitory review page for 'Polytechnic'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Polytechnic'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Polytechnic = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Polytechnic">
            </ReviewPage>

        </div>
    )
}

export default Polytechnic;