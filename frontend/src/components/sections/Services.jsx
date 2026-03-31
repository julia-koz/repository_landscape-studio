import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/globals.css';

const Services = () => {
    return (
        <section className="services-index">
            <h1>Our Services</h1>
            <div className="service-index-list">
                <Link to="/services/design" className="service-index-item">
                    <img src="/images/design.jpg" alt="Landscape Design" />
                    <p className="service-index-text">Landscape Design</p>
                </Link>
                <Link to="/services/greening" className="service-index-item">
                    <img src="/images/greening.jpg" alt="Landscaping" />
                    <p className="service-index-text">Landscaping</p>
                </Link>
                <Link to="/services/maintenance" className="service-index-item">
                    <img src="/images/maintenance.jpg" alt="Garden Care" />
                    <p className="service-index-text">Garden Care</p>
                </Link>
            </div>
            <Link to="/services" className="about-button">All Services</Link>
        </section>
    );
};

export default Services;