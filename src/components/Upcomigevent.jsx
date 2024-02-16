import Navbar from "./Navbar";
import Footer from "./Footer";
import EventDisplay from "./EventDisplay";
import "./upcomingevent.css";

const UpcomingEvent = () => {
  return (
    <div>
      <Navbar />
      <div className="all">
        <div className="top">
          <h1>UPCOMING EVENT</h1>
          <div className="img-top">
            <EventDisplay
              className="EventDisplay"
              imageSrc="public/Images/Image1.jpg"
              eventName="Event 1"
              description="Description for Event 1."
            />
            <EventDisplay
              className="EventDisplay"
              imageSrc="public/Images/Image2.jpg"
              eventName="Event 2"
              description="Description for Event 2."
            />
          </div>
        </div>
        <div className="bottom">
          <h1>PAST EVENTS</h1>
          <div className="img-bottom">
            <EventDisplay
              className="EventDisplay"
              imageSrc="public/Images/Image3.jpg"
              eventName="Event 3"
              description="Description for Event 3."
            />
            <EventDisplay
              className="EventDisplay"
              imageSrc="public/Images/Image4.jpg"
              eventName="Event 4"
              description="Description for Event 4."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingEvent;
