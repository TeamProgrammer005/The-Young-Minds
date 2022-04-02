
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

function App() {
  return (
    <>
    <Router>
     <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
