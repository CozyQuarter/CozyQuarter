import React from 'react';
import dorm from './dorm.jpg';  // Make sure to import the image
import MapComponent from './components/CampusMap'; 


const Home = () => {
    return (
        <div>
            <div className="panels">
                <div className="left-panel">
                    <div className="custom-heading">
                        <b>Welcome to CozyQuarter</b>
                    </div>
                    <h3 className="my-heading"><em>Elevating <span class="highlight-red">RPI Dorm</span> Choices!</em></h3>
                    <p>Discover all you need to simplify your dorm search experience and gain insights from
                        reviews by RPI students and alumni - your gateway to a well-informed campus living
                        choice awaits!
                    </p>
                </div>
                <div className="right-panel">
                    <img src={dorm} alt="Descriptive text" className="responsive-image"/>
                    
                </div>
            </div>
            <div className="panel">
                 <div className="panel-body">
                    <MapComponent />
                </div>
            </div>  
        </div>
    );
};

export default Home;
