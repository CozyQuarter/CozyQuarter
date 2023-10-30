import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png";
import React, { useState } from 'react';
import DropdownMenu from '../DropdownMenu';
import { useAuth } from '../../../context/authContext';
// import './Header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [menuSelection, setMenuSelection] = useState(null);

    const [visibleDropdown, setVisibleDropdown] = useState('');
    const { currentUser } = useAuth();


    const toggleMenu = (selectedMenu) => {
        if (menuSelection === selectedMenu) {
            setMenuSelection(null);
        } else {
            setMenuSelection(selectedMenu);
        }
        setMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = (label) => {
        setVisibleDropdown(label);
    }

    const handleMouseLeave = () => {
        setVisibleDropdown('');
    }

    const menuItems = {
        freshman: [
            { label: 'BARH', link: '/freshman/barh' },
            { label: 'Barton', link: '/freshman/barton' },
            { label: 'Bray', link: '/freshman/bray' },
            { label: 'Cary', link: '/freshman/cary' },
            { label: 'Crockett', link: '/freshman/crockett' },
            { label: 'Davison', link: '/freshman/davison' },
            { label: 'Hall', link: '/freshman/hall' },
            { label: 'Nason', link: '/freshman/nason' },
            { label: 'Nugent', link: '/freshman/nugent' },
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
            { label: 'Stacwyck', link: '/sophomore/stacwyck' },
        ],

        upperclass: [
            { label: 'City Station West', link: '/upperclass/citystationwest' },
            { label: 'Polytechnic', link: '/upperclass/polytechnic' },
        ],
    };

    return (
        <header style={{ position: 'relative' }}>

            <div className="container">
                <div className="menu-button" onClick={toggleMenu}>
                    <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <Link to="/Home/">
                    <img src={logo} alt="Cozy Quarter Logo" width={400}></img>
                </Link>
                {isMenuOpen ? (
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/AllDorms">All Dorms</Link>
                            </li>
                            <li>
                                <span onClick={() => toggleMenu('freshman')}>Freshman</span>
                                {menuSelection === 'freshman' && (
                                    <ul>
                                        {menuItems.freshman.map((item) => (
                                            <li key={item.label}>
                                                <Link to={item.link}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span onClick={() => toggleMenu('sophomore')}>Sophomore</span>
                                {menuSelection === 'sophomore' && (
                                    <ul>
                                        {menuItems.sophomore.map((item) => (
                                            <li key={item.label}>
                                                <Link to={item.link}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span onClick={() => toggleMenu('upperclass')}>Upperclass</span>
                                {menuSelection === 'upperclass' && (
                                    <ul>
                                        {menuItems.upperclass.map((item) => (
                                            <li key={item.label}>
                                                <Link to={item.link}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                ) : null}
                <Link to="/AllDorms/">
                    <h3>All Dorms</h3>
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

                {currentUser ? ( // If the user is signed in, show "Profile" button
                    <Link to="/profile">
                        <h3>Profile</h3>
                    </Link>
                ) : (
                    // If the user is not signed in, show "Sign In" button
                    <Link to="../auth/Signin">
                        <h3>Sign In</h3>
                    </Link>
                )}
            </div>


        </header>
    )
}

export default Header;