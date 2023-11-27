/**
 * Quad Component
 * 
 * This component represents the dormitory review page for 'Quad'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Quad'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Quad = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Quad">
            </ReviewPage>

        </div>
    )
}

export default Quad;