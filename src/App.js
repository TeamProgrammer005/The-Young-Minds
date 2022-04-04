
import AboutUs from "./About/AboutUs";
import Nav from "./Navbar/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./Home/Home"
import Services from "./Services/Services";
import Store from "./Our_Store/Store";

function App() {
  return (
    <>
    <Router>
     <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/our_store" element={<Store/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
