// Collapsible sections for the FAQ section

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
