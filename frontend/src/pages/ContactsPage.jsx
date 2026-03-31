import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MapSection from '../components/shared/MapSection';

const ContactsPage = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const newRequest = {
            name: `${form.name.value.trim()} ${form.surname.value.trim()}`,
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            address: form.address.value.trim(),
            message: form.message.value.trim(),
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
                setFormStatus('success');
                alert("Thank you! Your request has been sent.");
                form.reset();
            } else {
                throw new Error('Error sending form.');
            }
        } catch (error) {
            console.error(error);
            setFormStatus('error');
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <>
            <Header />
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Let’s discuss<br />your new project</h2>
                        <p>Fill out the form or call us<br />for a free consultation.</p>
                        <p><strong>Service Areas:</strong><br />
                            Kyiv, Kyiv Region, and Lviv
                        </p>
                        <p>24 Avtozavodska St, Kyiv</p>
                        <p>info@mysite.com</p>
                        <p>+380 66 194 14 68</p>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="text" name="name" placeholder="First Name *" required />
                            <input type="text" name="surname" placeholder="Last Name *" required />
                        </div>
                        <div className="form-row">
                            <input type="email" name="email" placeholder="Email Address *" required />
                            <input type="tel" name="phone" placeholder="Phone Number" />
                        </div>
                        <input type="text" name="address" placeholder="Property Address" />
                        <textarea name="message" placeholder="How can we help you?..." rows="4" />
                        <button className="button-contact" type="submit">Send Message</button>
                    </form>
                </div>
            </section>

            <MapSection />
            <Footer />
        </>
    );
};

export default ContactsPage;