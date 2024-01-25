// EventDisplay.js
import React from 'react';
import './EventDisplay.css';

const EventDisplay = ({ imageSrc, eventName, description }) => {
  return (
    <div className="event-container">
      <div className="image-overlay">
        <h3>{eventName}</h3>
        <p>{description}</p>
      </div>
      <img src={imageSrc} alt={eventName} />
    </div>
  );
};

export default EventDisplay;