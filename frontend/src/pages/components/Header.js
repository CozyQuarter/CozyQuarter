// The header shows at the top of the screen and has:
// Logo (goes home), Search bar, Freshman, Sophomore, Upperclass (Dropdowns), Sign In

import { Link } from 'react-router-dom';
import logo from "./logo.png";
import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const Header = () => {

    const [visibleDropdown, setVisibleDropdown] = useState('');

    const handleMouseEnter = (label) => {
      setVisibleDropdown(label);
    }
  
    const handleMouseLeave = () => {
      setVisibleDropdown('');
    }
    
    const menuItems = {
        freshman: [
            { label: 'Barton', link: '/freshman/barton' },
            { label: 'Bray', link: '/freshman/bray' },
            { label: 'BARH', link: '/freshman/barh' },
            { label: 'Cary', link: '/freshman/cary' },
            { label: 'Crockett', link: '/freshman/crockett' },
            { label: 'Davidson', link: '/freshman/davidson' },
            { label: 'Nugent', link: '/freshman/nugent' },
            { label: 'Hall', link: '/freshman/hall' },
            { label: 'Nason', link: '/freshman/nason' },
            { label: 'Sharp', link: '/freshman/sharp' },
            { label: 'Warren', link: '/freshman/warren' },
        ],    
  
        sophomore: [
            { label: 'Blitman', link: '/sophomore/blitman' },
            { label: 'Bryckwyck', link: '/sophomore/bryckwyck' },
            { label: 'Colonie', link: '/sophomore/colonie' },
            { label: 'E-Complex', link: '/sophomore/ecomplex' },
            { label: 'North', link: '/sophomore/north' },
            { label: 'Quad', link: '/sophomore/quad' },
            { label: 'RAHP A', link: '/sophomore/rahpa' },
            { label: 'RAHP B', link: '/sophomore/rahpb' },
        ],

        upperclass: [
            { label: 'City Station West', link: '/upperclass/citystationwest' },
            { label: 'Polytechnic', link: '/upperclass/polytechnic' },
        ],
    };

    return (
        <header style={{ position: 'relative' }}>

            <div className = "container">
                <Link to = "/">
                    <img src={logo} alt="Cozy Quarter Logo" width={400}></img>
                </Link>

                <div 
                    onMouseEnter={() => handleMouseEnter('freshman')} 
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }} 
                >
                    <h3>Freshman</h3>
                    {visibleDropdown === 'freshman' && (
                        <div style={{ position: 'absolute', top: '100%', left: 0 }}>
                        <DropdownMenu items={menuItems.freshman} />
                        </div>
                    )}
                </div>

                <div 
                    onMouseEnter={() => handleMouseEnter('sophomore')} 
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }} 
                >
                    <h3>Sophomore</h3>
                    {visibleDropdown === 'sophomore' && (
                        <div style={{ position: 'absolute', top: '100%', left: 0 }}>
                        <DropdownMenu items={menuItems.sophomore} />
                        </div>
                    )}
                </div>

                <div 
                    onMouseEnter={() => handleMouseEnter('upperclass')} 
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }} 
                >
                    <h3>Upperclass</h3>
                    {visibleDropdown === 'upperclass' && (
                        <div style={{ position: 'absolute', top: '100%', left: 0 }}>
                        <DropdownMenu items={menuItems.upperclass} />
                        </div>
                    )}
                </div>
                
            </div>
        </header>
    )
}

export default Header