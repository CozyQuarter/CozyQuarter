/**
 * Stacwyck Component
 * 
 * This component represents the dormitory review page for 'Stacwyck'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Stacwyck'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Stacwyck = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Stacwyck">
            </ReviewPage>

        </div>
    )
}

export default Stacwyck;