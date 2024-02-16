/* eslint-disable react/prop-types */
import { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Loginorg = ({ toggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Navbar />
      <form action="" className="sign_form">
        <h1 id="font-color">Sign In</h1>
        <h4 id="font-color">
          <b>Organization info</b>
        </h4>
        <input
          type="text"
          value={username}
          placeholder="Email or phone"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to="/Upcomigevent">
          <button>Sign in</button>
        </Link>
        <p>-----or continue with google-----</p>
        <button>Continue with google</button>
        <p>
          Dont have an account? <span onClick={toggle}>signup </span>
        </p>
      </form>
    </div>
  );
};

export default Loginorg;
