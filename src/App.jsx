import {BrowserRouter,Routes,Route, Router} from"react-router-dom"
import Card from "./components/EventDisplay"
import Navbar from "./components/Navbar"
import Home from "./assets/home"
import About from "./assets/About"
import Login from "./components/Login"
import SignUp from "./assets/SignUp"


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  
    
  );
};

export default App;