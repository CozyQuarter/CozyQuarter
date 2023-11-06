import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ menuItems, closeMenu }) => {
  return (
    <div className="mobile-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} onClick={closeMenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
