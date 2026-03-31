// src/components/MapSection.jsx
import React from 'react';
import '../../styles/globals.css';

const MapSection = () => {
    return (
        <section className="map-section">
            <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=вул.+Автозаводська+24,+Київ&output=embed"
                className="map-iframe"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default MapSection;