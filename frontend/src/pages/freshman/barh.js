/**
 * BARH Component
 * 
 * This component represents the dormitory review page for 'BARH'.
 * It renders the 'ReviewPage' component with the dormitory ID 'BARH'.
 */

import React from 'react';
import ReviewPage from '../components/ReviewPage';

const Barh = () => {
    return (
        <div>
            <ReviewPage dorm_id='BARH' />
        </div>
    );
};

export default Barh;
