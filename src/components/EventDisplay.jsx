import PropTypes from "prop-types"; // Import PropTypes
import "./EventDisplay.css";

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

// Prop type validation
EventDisplay.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Validate imageSrc as a string and is required
  eventName: PropTypes.string.isRequired, // Validate eventName as a string and is required
  description: PropTypes.string.isRequired, // Validate description as a string and is required
};

export default EventDisplay;
