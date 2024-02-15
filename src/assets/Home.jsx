import Navbar from "../components/Navbar";
import EventDisplay from "../components/EventDisplay";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="imagepart">
        <EventDisplay
          imageSrc="public\Images\Image1.jpg"
          eventName="Event 1"
          description="Description for Event 1."
        />
        <EventDisplay
          imageSrc="public\Images\Image2.jpg"
          eventName="Event 1"
          description="Description for Event 1."
        />
        <EventDisplay
          imageSrc="public\Images\Image3.jpg"
          eventName="Event 1"
          description="Description for Event 1."
        />
        <EventDisplay
          imageSrc="public\Images\Image4.jpg"
          eventName="Event 1"
          description="Description for Event 1."
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
