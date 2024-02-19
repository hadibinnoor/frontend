import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/Events/")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <Navbar />
      <img src="./home/rango/volunteer_management/Event_images/658a85c6-9b3b-4a41-ab18-214ec1ecd68d.jpeg" alt="No image" />

      <div className="imagepart">
        {events.map((event) => (
          <EventCard
            key={event.Event_ID}
            eventData={{
              image: event.poster_url,
              eventName: event.Event_Name,
              description: event.Event_Description,
              eventId:event.Event_ID,
            }}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
