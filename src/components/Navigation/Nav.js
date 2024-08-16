import React from 'react';
import './Nav.css'
import {  NavLink } from 'react-router-dom';


function Nav(props) {
    return (
        <div>
            <div className="topnav">
                <NavLink exact to="/home" >Home</NavLink>
                <NavLink  exact to ="/news">News</NavLink>
                <NavLink  exact to ="/contact">Contact</NavLink>
                <NavLink  exact to ="/about">About</NavLink>
            </div>
        </div>
    );
}

export default Nav;