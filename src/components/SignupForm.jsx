const SignupForm = () => {
  return (
    <div>
      <div>
        <form action="" className="sign_up">
          <h2>Sign up to become a volunteer</h2>
          <h4>
            <b>personal info</b>
          </h4>
          <label htmlFor="">First Name</label>
          <input id="labels" type="text" placeholder="First name" />
          <label htmlFor="">Last Name</label>
          <input id="labels" type="text" placeholder="Last name" />
          <label htmlFor="">Email Address</label>
          <input id="labels" type="email" placeholder="Email Address" />
          <label htmlFor="">Password</label>
          <input id="labels" type="password" placeholder="Password" />
          <label htmlFor="">Confirm password</label>
          <input id="labels" type="password" placeholder="Password" />
          <label htmlFor="">Phone Number</label>
          <input id="labels" type="number" placeholder="Phone Number" />
          <label htmlFor="">Age</label>
          <input id="labels" type="number" placeholder="Age" />
          <label htmlFor="">Region</label>
          <input id="labels" type="text" placeholder="Region" />
          <label htmlFor="">Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button id="submit-button">submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
