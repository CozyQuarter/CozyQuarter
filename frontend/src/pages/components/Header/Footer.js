/**
 * Footer Component
 * 
 * The footer component is displayed at the bottom of the screen and provides links
 * to various sections of the website, including Resources/FAQ and About Us.
 * 
 * Dependencies:
 * - React: For creating and rendering the component.
 * - react-router-dom: For routing and navigation between different sections.
 * 
 * Exported Component:
 * - Footer: A React component that displays links to Resources/FAQ and About Us.
 */

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';

const Footer = () => {

    return (
        <footer style={{ position: 'relative' }}>

            <div className = "footer">

                <Link to = "/FAQ/"
                onClick={() => {
                    window.scroll(0, 0);
                }}>
                    <h3> FAQ </h3>
                </Link>

                <Link to = "/Rules/"
                onClick={() => {
                    window.scroll(0, 0);
                  }}>
                    <h3> Rules </h3>
                </Link>

                <Link to = "/AboutUs/"
                onClick={() => {
                    window.scroll(0, 0);
                  }}>
                    <h3> About Us </h3>
                </Link>
                
            </div>
        </footer>
    )
}

export default Footer