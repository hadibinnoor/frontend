import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/home";
import About from "./assets/About";
import Event from "./assets/Event";
import Contact from "./assets/Contact";
import Login from "./components/Login";
import SignUp from "./assets/SignUp";
import Loginorg from "./components/Loginorg";
import Thank from "./components/Thank";
import Upcomigevent from "./components/Upcomigevent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/loginorg" element={<Loginorg />} />
          <Route path="/Thank" element={<Thank />} />
          <Route path="/Upcomigevent" element={<Upcomigevent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
