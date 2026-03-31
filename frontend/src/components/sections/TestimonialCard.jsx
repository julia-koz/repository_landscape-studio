import React from 'react';

const TestimonialCard = ({ text, author }) => (
    <div className="testimonial">
        <p className="quote">”</p>
        <p>{text}</p>
        <h4 className="author">{author}</h4>
    </div>
);

export default TestimonialCard;
