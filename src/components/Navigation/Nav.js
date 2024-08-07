import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <div className="topnav">
                <NavLink href="home">Home</NavLink>
                <NavLink href="news">News</NavLink>
                <NavLink href="contact">Contact</NavLink>
                <NavLink href="about">About</NavLink>
            </div>
        </div>
    );
}

export default Nav;