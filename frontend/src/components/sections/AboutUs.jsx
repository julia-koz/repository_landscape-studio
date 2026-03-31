import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/globals.css';

const AboutUs = () => {
    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate('/about'); 
    };

    return (
        <section className="about">
            <img src="/images/about.jpg" alt="Ландшафтний дизайн" />
            <div className="about-box">
                <h1 className="about-title-us">Expert Landscape Design Services</h1>
                <p className="about-text">
                    NL NATURE was founded in 2004 by Daniil Pylypenko, who has since become a distinguished expert in the field.
                    To this day, Daniil’s vision and guidance remain at the heart of every single project.
                    As a premier landscape firm operating across Ukraine and Europe, NL NATURE infuses every design with a sense of refined elegance and poetic inspiration.
                </p>
                <button className="about-button" onClick={handleNavigate}>Details</button>
            </div>
        </section>
    );
};

export default AboutUs;
