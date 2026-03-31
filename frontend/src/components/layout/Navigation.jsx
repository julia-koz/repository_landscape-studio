import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About Us</NavLink></li>
                <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : ''}>Services</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink></li>
                <li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'active-link' : ''}>Contacts</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
