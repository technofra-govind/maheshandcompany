import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewArrival from "./Pages/NewArrival/NewArrival";
import SandItem from "./Pages/SandItem/SandItem";
import Bags from "./Pages/Bags/Bags";
import Acrylic from "./Pages/Acrylic And Plastics/Acrylic";
import Anatomy from "./Pages/Anatomy Models/Anatomy";
import Crystal from "./Pages/Crystal/Crystal";
import Fiber from "./Pages/Fiber/Fiber";
import Leatherite from "./Pages/Leatherite/Leatherite";
import Metal from "./Pages/Metal/Metal";
import ShirtandTShirt from "./Pages/Shirt & T-Shirts/ShirtandTShirt";
import Umbrella from "./Pages/Umbrella/Umbrella";
import SpacePens from "./Pages/Space Pens/SpacePens";
import ScrollToTop from "react-scroll-to-top";
import Scroll from "./Components/Scroll/Scroll";

function App() {
  // useEffect(() => {
  //   fetch("https://mahesh-backend-deploy.onrender.com")
  // }, []);



  return (
    <>
      <ScrollToTop smooth color="white" className="scrolltotop" height="15" width="15" top={50} />
      <Router>
      <Scroll/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newarrival" element={<NewArrival />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/acrylic" element={<Acrylic />} />
          <Route path="/anatomy" element={<Anatomy />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/crystal" element={<Crystal />} />
          <Route path="/fiber" element={<Fiber />} />
          <Route path="/leatherite" element={<Leatherite />} />
          <Route path="/metal" element={<Metal />} />
          <Route path="/sandtimers" element={<SandItem />} />
          <Route path="/shirtandtShirt" element={<ShirtandTShirt />} />
          <Route path="/umbrella" element={<Umbrella />} />
          <Route path="/spacepens" element={<SpacePens />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
