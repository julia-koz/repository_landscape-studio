import React, { useState } from 'react';
import '../../styles/globals.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRequest = {
            name: `${formData.firstName} ${formData.lastName}`,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            message: formData.message,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('http://localhost:5000/api/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRequest)
            });

            if (response.ok) {
                alert("Thank you for reaching out! We will contact you soon.");
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: ''
                });
            } else {
                throw new Error('Error while sending the form');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="contact-section-main">
            <div className="contact-left-main">
                <h2>Let’s discuss<br />your new project</h2>
                <p>Fill out the form or call us for a free consultation.</p>
                <p>
                    <strong>Service area:</strong><br />
                    Kyiv, Kyiv region<br />
                    3 Zoia Haidai Street, Kyiv<br />
                    <a href="mailto:info.il.nature@gmail.com">info.il.nature@gmail.com</a><br />
                    <a href="tel:+380661941468">+380 66 194 14 68</a>
                </p>
            </div>

            <div className="contact-form-main">
                <form onSubmit={handleSubmit}>
                    <div className="row-main">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name *"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name *"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="row-main">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Message text..."
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button className="button-contact-main" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
