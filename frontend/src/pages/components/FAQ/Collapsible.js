// Collapsible sections for the FAQ section

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
