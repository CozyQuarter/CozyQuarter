/**
 * Collapsible Component
 * 
 * A reusable React component for creating collapsible sections. It allows users
 * to toggle the visibility of content by clicking on a label button.
 * 
 * Dependencies:
 * - React: For creating and rendering the component.
 * 
 * Exported Component:
 * - Collapsible: A React component that provides collapsible sections.
 */

import React from 'react';
import { useState } from 'react';

const Collapsible = ({ children, label }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`collapsible ${isOpen ? 'active' : ''}`}>
        <button className='toggle' onClick={() => setIsOpen(!isOpen)}>
            <span className={`arrow ${isOpen ? 'active' : ''}`}> </span>
            <span className='lbl-toggle'> {label} </span>
        </button>
  
        <div className={`content ${isOpen ? 'show' : ''}`}>{children}</div>
      </div>
    );
  };

export default Collapsible;
