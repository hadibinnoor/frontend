import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { eventId } = useParams(); // Access the eventId parameter from the route path

  // State to store event details
  const [event, setEvent] = useState(null);
  console.log(eventId);

    // Fetch event details based on the eventId parameter
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/Event/${eventId}`)
          .then((res) => res.json())
          .then((data) => setEvent(data));
      }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.Event_Name}</h1>
      <p>{event.Event_disription}</p>
      {/* Render other details of the event */}
    </div>
  );
};

export default EventDetailsPage;
