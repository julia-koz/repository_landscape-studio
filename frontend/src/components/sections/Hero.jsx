// src/components/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/globals.css';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: "url('/images/garden.jpg')" }}>
            <div className="hero-text">
                <p>
                    Crafting your perfect garden. From custom estimates to professional landscape design, we bring out the natural beauty of your land. Contact us today to start your journey to a green paradise!
                </p>
            </div>
            <Link to="/contacts" className="hero-button">Get a Quote</Link> {}
        </section>
    );
};

export default Hero;
