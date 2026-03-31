// src/pages/ProjectsPage.jsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

const projects = [
    {
        title: 'Garden in Horenychi',
        location: 'Horenychi village',
        description:
            'Comprehensive landscaping including geoplastics, automatic irrigation, rolled turf, and decorative Corten steel flower beds. Created a decorative garden with a modern landscape and a pond.',
        images: [
            '/images/projects/gorenychi1.jpg',
            '/images/projects/gorenychi2.jpg',
            '/images/projects/gorenychi3.jpg',
        ],
    },
    {
        title: 'Site Design in Hnidyn',
        location: 'Hnidyn village',
        description:
            'A sunny open plot project. Developed two design concepts, 3D visualizations, detailed drawings, and plant selection. Features include bonsai, green backdrops, and geometric planning.',
        images: [
            '/images/projects/hnidyn1.jpg',
            '/images/projects/hnidyn2.jpg',
            '/images/projects/hnidyn3.jpg',
        ],
    },
    {
        title: 'Green Roof at "Rybalsky" Residential Complex',
        location: 'Kyiv',
        description:
            'Parking roof landscaping: geoplastics, auto-irrigation, and rolled turf. The space was transformed into a cozy square with recreational areas and shaded tree zones.',
        images: [
            '/images/projects/rybalsky1.jpg',
            '/images/projects/rybalsky2.jpg',
            '/images/projects/rybalsky3.jpg',
        ],
    },
    {
        title: 'Public Space at "Arsenal" Factory',
        location: 'Kyiv',
        description:
            'Comprehensive landscaping of an industrial zone. Geoplastics, mono-planting, automatic irrigation, and ongoing maintenance. Created a cozy green space for relaxation.',
        images: [
            '/images/projects/arsenal1.jpg',
            '/images/projects/arsenal2.jpg',
            '/images/projects/arsenal3.jpg',
        ],
    },
];

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <section className="projects-page">
                <div>
                    <h1 className="projects-title">OUR PROJECTS</h1>
                    <p className="projects-subtitle">
                        We bring the beauty of nature to every corner of your property. Explore examples of our work.
                    </p>

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-section ${index % 2 !== 0 ? 'reverse' : ''}`}
                        >
                            <ul className="project-images">
                                {project.images.map((img, i) => (
                                    <li key={i}>
                                        <img className="project-images-item" src={img} alt={`${project.title} ${i + 1}`} />
                                    </li>
                                ))}
                            </ul>
                            <div className="project-info">
                                <h2>{project.title}</h2>
                                <p className="location">{project.location}</p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProjectsPage;