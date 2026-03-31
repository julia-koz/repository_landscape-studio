import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../../styles/globals.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" className="logo-link">
                    <img src="/images/logo.png" alt="Фото логотипа" className="logo-img" />
                    <span className="logo-text">IL NATURE</span>
                </Link>
            </div>
            <div className="right-section">
                <Navigation />
                <div className="contact">+380 66 194 1468</div>
            </div>
        </header>
    );
};

export default Header;
