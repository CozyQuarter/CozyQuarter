/**
 * Bryckwyck Component
 * 
 * This component represents the dormitory review page for 'Bryckwyck'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Bryckwyck'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Bryckwyck = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Bryckwyck">
            </ReviewPage>

        </div>
    )
}

export default Bryckwyck;