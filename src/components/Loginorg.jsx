import "./Login.css";
import Navbar from "./Navbar";
import { useState } from "react";
import Loginasorg from "./Loginasorg";
import Orgsignup from "./Orgsignup";
import Footer from "./Footer";

const Loginorg = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleTab = () => {
    setIsLogin(false);
  };
  return (
    <div>
      <Navbar />
      <div className="bgimg">
        <h3 id="text">Welcome Volunteer</h3>
        <p>
          Welcome abroad. Your commitment Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Necee nulla architecto quaerat saepe tempora.
        </p>
      </div>
      {isLogin ? <Loginasorg toggle={toggleTab} /> : <Orgsignup />}

      <Footer />
    </div>
  );
};

export default Loginorg;
