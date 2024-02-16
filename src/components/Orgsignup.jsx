import { Link } from "react-router-dom";
const Orgsignup = () => {
  return (
    <div>
      <div>
        <form action="" className="sign_up">
          <h2>Sign up to become a Organization</h2>
          <h4>
            <b>Organization info</b>
          </h4>
          <label htmlFor="">Organizatio Name</label>
          <input id="labels" type="text" placeholder="Organization Name" />
          <label htmlFor="">Email Address</label>
          <input id="labels" type="email" placeholder="Email Address" />
          <label htmlFor="">Password</label>
          <input id="labels" type="password" placeholder="Password" />
          <label htmlFor="">Confirm password</label>
          <input id="labels" type="password" placeholder="Password" />
          <label htmlFor="">Phone Number</label>
          <input id="labels" type="number" placeholder="Phone Number" />
          <label htmlFor="">Region</label>
          <input id="labels" type="text" placeholder="Region" />
          <label htmlFor="">Goal</label>
          <input id="labels" type="text" placeholder="Goal" />
          <label htmlFor="">Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Link to="/Thank">
            <button id="submit-button">submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Orgsignup;
