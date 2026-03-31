import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

const services = [
    {
        title: 'Design and Planning',
        description: 'Creating a personalized landscape plan that matches your preferences and the style of your property.',
        image: '/images/services/design.jpg',
    },
    {
        title: 'Landscaping',
        description: 'Professional planting of trees, shrubs, lawns, and flower beds suited to the local climate.',
        image: '/images/services/greening.jpg',
    },
    {
        title: 'Garden Maintenance',
        description: 'Regular watering, pruning, fertilizing, and pest and disease control.',
        image: '/images/services/maintenance.jpg',
    },
    {
        title: 'Sod Installation',
        description: 'A perfect green lawn in one day — with professional preparation, installation, and care.',
        image: '/images/services/lawn.jpg',
    },
    {
        title: 'Automatic Irrigation Installation',
        description: 'Design and installation of efficient irrigation systems for water savings.',
        image: '/images/services/irrigation.jpg',
    },
    {
        title: 'Small Architectural Structures',
        description: 'Gazebos, pergolas, bridges, and decorative elements to create a cozy atmosphere.',
        image: '/images/services/architecture.jpg',
    },
    {
        title: 'Pathways and Paving',
        description: 'Creating convenient and aesthetic paths made of natural stone or tiles.',
        image: '/images/services/pathways.jpg',
    },
    {
        title: 'Terrace and Roof Landscaping',
        description: 'Solutions for vertical greenery and green roof designs.',
        image: '/images/services/roof.jpg',
    },
    {
        title: 'Landscape Lighting',
        description: 'Decorative and functional lighting for highlights and safety.',
        image: '/images/services/lighting.jpg',
    },
    {
        title: 'Seasonal Garden Care',
        description: 'Preparing your garden for winter or spring — deep cleaning and plant care.',
        image: '/images/services/season.jpg',
    },
];

const ServicesPage = () => {
    return (
        <>
            <Header />
            <section className="services-hero">
                <div
                    className="services-hero-bg"
                    style={{ backgroundImage: `url('/images/services/hero-leaves.jpg')` }}
                >
                    <h1 className="services-hero-title">OUR SERVICES</h1>
                </div>
            </section>

            <section className="services-page">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div className="service-item" key={index}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-image"
                                />
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ServicesPage;
