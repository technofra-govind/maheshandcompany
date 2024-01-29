import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewArrival from "./Pages/NewArrival/NewArrival";
import SandItem from "./Pages/SandItem/SandItem";
import Bags from "./Pages/Bags/Bags";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/newarrival" element={<NewArrival/>}/>
        <Route path="/contact" element={<Contact/>}/>

        {/* product Pages */}
        <Route path="/sanditems" element={<SandItem/>}/>
        <Route path="/bags" element={<Bags/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
