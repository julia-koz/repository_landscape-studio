import React from 'react';
import TestimonialCard from './TestimonialCard';
import '../../styles/globals.css';

const testimonials = [
    {
        text: "I was very pleased with the work of this landscaping company. The team's professionalism and attention to detail are impressive. My garden has been transformed and is now a real oasis of peace. I recommend them to everyone who wants their property to be beautiful and well-maintained!",
        author: "Oleh Kozyriatskyi"
    },
    {
        text: "We are absolutely satisfied with the work of the landscape design company! The team's professionalism and attention to detail made our property truly unique. We recommend them to anyone who wants to transform their garden!",
        author: "Anastasiia Volova"
    },
    {
        text: "Thanks to this company, I got the yard of my dreams. They created a harmonious space that has become a place of relaxation for the whole family. The picturesque flowerbeds, unique pathways, and professionally designed lighting are especially impressive.",
        author: "Anton Sydorenko"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            {testimonials.map((t, i) => (
                <TestimonialCard key={i} text={t.text} author={t.author} />
            ))}
        </section>
    );
};

export default Testimonials;
