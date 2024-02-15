import "./Login.css";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import { useState } from "react";
import SignupForm from "./SignupForm";
import Footer from "./Footer";

const Login = () => {
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
      {isLogin ? <LoginForm toggle={toggleTab} /> : <SignupForm />}
      <Footer />
    </div>
  );
};

export default Login;
