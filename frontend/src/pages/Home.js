import React from 'react';
import dorm from './dorm.jpg';  // Make sure to import the image

const Home = () => {
    return (
        <div>
            <div className="panels">
                <div className="left-panel">
                    <div className="custom-heading">
                        <b>Welcome to CozyQuarter</b>
                    </div>
                    <h3 className="my-heading"><em>Elevating <span class="highlight-red">RPI Dorm</span> Choices!</em></h3>
                    <p>CozyQuarter is a hub for RPI students and past residents to share 
                        and explore feedback on on-campus dorms. By fostering transparent communication, 
                        it provides a platform for current and prospective students to navigate through 
                        dormitory options. Through candid reviews, visuals, and shared experiences, 
                        individuals can make informed housing choices for a better college living experience.</p>
                </div>
                <div className="right-panel">
                    <img src={dorm} alt="Descriptive text" className="responsive-image"/>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
