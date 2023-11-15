/**
 * EComplex Component
 * 
 * This component represents the dormitory review page for 'EComplex'.
 * It renders the 'ReviewPage' component with the dormitory ID 'EComplex'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const EComplex = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="EComplex">
            </ReviewPage>

        </div>
    )
}

export default EComplex;