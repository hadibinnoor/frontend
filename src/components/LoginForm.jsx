/* eslint-disable react/prop-types */
import { useState } from "react";
// import { Link } from "react-router-dom";

const LoginForm = ({ toggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form action="" className="sign_form">
        <h1 id="font-color">Sign In</h1>
        <h4 id="font-color">
          <b>personal info</b>
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
        <button>Sign in</button>
        <p>-----or continue with google-----</p>
        <button>Continue with google</button>
        <button id="org-button">Login As organization</button>
        <p>
          Dont have an account? <span onClick={toggle}>Sign Up </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
