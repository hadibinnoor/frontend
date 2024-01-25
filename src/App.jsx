import {BrowserRouter,Routes,Route, Router} from"react-router-dom"
import Card from "./components/EventDisplay"
import Navbar from "./components/Navbar"
import Home from "./assets/Home"
import About from "./assets/About"


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  
    
  );
};

export default App;