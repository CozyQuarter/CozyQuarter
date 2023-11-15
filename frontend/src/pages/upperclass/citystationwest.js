/**
 * CityStationWest Component
 * 
 * This component represents the dormitory review page for 'CityStationWest'.
 * It renders the 'ReviewPage' component with the dormitory ID 'CityStationWest'.
 */

import React from 'react';
import ReviewPage from "../components/ReviewPage"

const CityStationWest = () => {
    
    return (
        <div>
            <ReviewPage
            dorm_id="CityStationWest">
            </ReviewPage>

        </div>
    )
}

export default CityStationWest;