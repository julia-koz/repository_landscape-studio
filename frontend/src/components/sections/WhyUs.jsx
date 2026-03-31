import React from 'react';
import '../../styles/globals.css';

const WhyUs = () => {
    return (
        <section className="advantages">
            <h1>Why Choose Us?</h1>
            <div className="advantage-list">
                <div className="advantage-item">
                    <h2 className="advantage-title">Personalized Approach</h2>
                    <p className="advantage-text">
                        Our designers carefully listen to every wish and idea, offering multiple
                        creative solutions while paying close attention to the smallest details.
                    </p>
                </div>
                <div className="advantage-item">
                    <h2 className="advantage-title">Expertise & Style</h2>
                    <p className="advantage-text">
                        Every project is a blend of modern aesthetics and practicality. We create
                        landscapes that are not only stunning but also fully functional.
                    </p>
                </div>
                <div className="advantage-item">
                    <h2 className="advantage-title">Quality & Reliability</h2>
                    <p className="advantage-text">
                        All work is completed on schedule using premium materials, plants,
                        and the latest landscaping technologies to ensure lasting results.
                    </p>
                </div>
                <div className="advantage-item">
                    <h2 className="advantage-title">Post-Project Support</h2>
                    <p className="advantage-text">
                        Upon completion, we provide comprehensive care guidelines and ongoing
                        support to help you maintain your landscape’s beauty for years to come.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;