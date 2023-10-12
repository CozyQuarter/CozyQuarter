// The footer shows at the bottom of the screen and has links to:
// Resources/FAQ, About Us

import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Footer = () => {

    return (
        <footer style={{ position: 'relative' }}>

            <div className = "footer">

                <Link to = "/FAQ/"
                onClick={() => {
                    window.scroll(0, 0);
                }}>
                    <h3> Resources/FAQ </h3>
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