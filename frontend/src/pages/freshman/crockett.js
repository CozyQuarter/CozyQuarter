/**
 * Crockett Component
 * 
 * This component represents the dormitory review page for 'Crockett'.
 * It renders the 'ReviewPage' component with the dormitory ID 'Crockett'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const Crockett = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="Crockett">
            </ReviewPage>

        </div>
    )
}

export default Crockett;