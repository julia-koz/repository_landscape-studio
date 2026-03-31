// pages/AboutPage.jsx
import React from 'react';
import TeamMemberCard from '../components/shared/TeamMemberCard';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

const teamMembers = [
    {
        name: 'Daniil Pylypenko',
        position: 'Founder and Chief Designer',
        description: 'Visionary of the company, over 20 years in landscape design. Controls each project - from idea to implementation. Has European experience and a sense of the poetry of nature in every line of the garden.',
        image: '/images/team/daniil.jpg',
    },
    {
        name: 'Olena Kovalchuk',
        position: 'Head of Project Department',
        description: 'Organizes the work of a team of designers and coordinates projects. Responsible for meeting deadlines and quality. Has an engineering and architectural education and over 10 years of experience.',
        image: '/images/team/olena.jpg',
    },
    {
        name: 'Oleg Savchenko',
        position: 'Leading agronomist',
        description: 'Specialist in plant selection, soil and green area care. Ensures the durability and viability of landscapes. Knows about climatic zones and has in-depth knowledge of biology.',
        image: '/images/team/oleh.jpg',
    },
    {
        name: 'Anna Lipvin',
        position: 'Florist-designer',
        description: 'Creates decorative compositions, floral solutions for gardens and interior spaces. Has an artistic approach and a diploma in floristry.',
        image: '/images/team/anna.jpg',
    },
    {
        name: 'Maria Chernenko',
        position: 'Chief Landscape Architect',
        description: 'He is engaged in the creation and design of outdoor spaces. His work includes planning, selection of plants, materials and decorative elements, as well as taking into account ecological aspects.',
        image: '/images/team/maria.jpg',
    },
    {
        name: 'Vladislav Boyko',
        position: 'Customer Support Manager',
        description: 'First contact with clients. Provides communication, accompanies clients from consultation to project completion.',
        image: '/images/team/vlad.jpg',
    },
];

const AboutPage = () => {
    return (
        <Layout>
            <div className="about-page-bg">
                <div className="about-container">
                    <section className="intro-section">
                        <div className="about-intro-grid">
                            <div className="intro-title-block">
                                <h1 className="about-title">About the company<br />IL Nature</h1>
                            </div>
                            <div className="intro-text-block">
                                <p className="about-text">
                                    NL NATURE has over 20 years of experience in creating harmonious spaces where nature and architecture come together.
                                    We specialize in landscape design, landscaping, landscaping and grounds maintenance.
                                    Our projects embody the individuality of each client - from private gardens to large-scale public spaces.
                                </p>
                            </div>
                        </div>
                        <img src="/images/1group-photo.jpg" alt="Our team" className="team-image-main" />
                    </section>


                    <section className="team-section">
                        <h2 className="team-title">Our team</h2>
                        <p className="team-description">
                            NL NATURE employs certified landscape designers, engineers, agronomists and florists.
                            The team is led by Daniil Pylypenko, the founder of the company, the ideological leader and the inspirer of each project.
                            Thanks to joint efforts, we transform space into a living poetry of nature.
                        </p>
                        <div className="team-grid">
                            {teamMembers.map((member, idx) => (
                                <div className="team-card-wrapper" key={idx}>
                                    <TeamMemberCard {...member} />
                                    {idx % 3 !== 2 && idx !== teamMembers.length - 1 && (
                                        <div className="card-divider" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;
