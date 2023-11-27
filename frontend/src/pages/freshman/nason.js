/**
 * Nason Component
 * 
 * This component represents the dormitory review page for 'Nason'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Nason'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Nason = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Nason">
            </ReviewPage>

        </div>
    )
}

export default Nason;