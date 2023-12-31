/**
 * Home Component
 * 
 * This component represents the homepage of CozyQuarter, providing users with a welcome and an
 * introduction to the platform's purpose. It encourages users to explore dorm reviews and make informed
 * choices for their campus housing. The component also includes a campus map section for added convenience.
 */

import React, { useState } from 'react';
import dorm from '../images/dorm.jpg';  // Make sure to import the image
import MapComponent from './components/CampusMap';
import logo from '../images/logo.png';
import './components/Menu.css';
import './Home.css';

const Home = () => {

    return (
        <div>
            <div className="header">

            </div>
            <div className="panels">
                <div className="left-panel responsive-left">
                    <div className="custom-heading">
                        <b>Welcome to CozyQuarter</b>
                    </div>
                    <h3 className="my-heading">
                        <em>Elevating <span class="highlight-red">RPI Dorm</span> Choices!</em>
                    </h3>
                    <p>
                        Discover all you need to simplify your dorm search experience and gain
                        insights from reviews by RPI students and alumni - your gateway to a
                        well-informed campus living choice awaits!
                    </p>
                </div>
                <div className="right-panel responsive-right">
                    <img src={dorm} alt="Descriptive text" className="responsive-image" />
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
