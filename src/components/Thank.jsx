import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Thanks.css";

const Thank = () => {
  return (
    <div>
      <Navbar />
      <div className="thanks">
        <h1 id="thanku">THANK YOU! </h1>
        <p id="para">
          -- a note of gratitude for you,to host an event for the community. We
          will connect you soon
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Thank;
