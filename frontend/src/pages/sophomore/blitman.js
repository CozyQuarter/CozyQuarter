/**
 * Blitman Component
 * 
 * This component represents the dormitory review page for 'Blitman'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Blitman'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Blitman = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Blitman">
            </ReviewPage>

        </div>
    )
}

export default Blitman;