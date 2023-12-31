import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = ({ items }) => {
    const itemsWithDividers = items.reduce((acc, item, index) => {
        acc.push(item);
        if (index < items.length - 1) {  // Don't add a divider after the last item
            acc.push({ isDivider: true });
        }
        return acc;
    }, []);

    return (
        <div className="dropdown-menu">
            {itemsWithDividers.map((item, index) => (
                item.isDivider ? (
                    <div key={index} className="divider"></div>
                ) : (
     
                    <Link key={index} to={item.link}>
                        <div>{item.label}</div>
                    </Link>
                )
            ))}
        </div>
        
    );
                };
export default DropdownMenu;


    //     item.label === 'BARH' ? (
            //         <Link key={index} to={`/freshman/barh`}>
            //   <div>{item.label}</div>
            // </Link>
            //     ) :  