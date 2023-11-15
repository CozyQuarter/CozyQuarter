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

const Collapsible = ({children, label}) => {
    
    const [IsOpen, setIsOpen] = useState(false)
    
    return (
        <div className='collapsible'>
            <button className='toggle' onClick={() => setIsOpen(!IsOpen)}>{label}</button>
            
            <div className={IsOpen ? 'content show' : 'content'}>{children}</div>

        </div>
    )
}

export default Collapsible;
