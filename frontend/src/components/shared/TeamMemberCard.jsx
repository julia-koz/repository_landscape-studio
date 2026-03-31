// components/TeamMemberCard.jsx
import React from 'react';
import '../../styles/globals.css';

const TeamMemberCard = ({ image, name, position, description }) => {
    return (
        <div className="team-card">
            <img src={image} alt={name} className="team-card-image" />
            <h3 className="team-card-name">{name}</h3>
            <p className="team-card-position">{position}</p>
            <p className="team-card-description">{description}</p>
        </div>
    );
};

export default TeamMemberCard;

