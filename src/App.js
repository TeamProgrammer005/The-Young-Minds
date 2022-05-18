
import AboutUs from "./About/AboutUs";
import Nav from "./Navbar/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./Home/Homesite"
import Services from "./Services/Services";
import Store from "./Our_Store/Store";
import PrivacyPolicy from "./Legal/PrivacyPolicy"
import Condition from "./Legal/Condition";
import Community from "./Community/Community";
import Homeblog from "./Home/Homeblog";

function App() {
  return (
    <>
    <Router>
     <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/homeblog" element={<Homeblog/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/our_store" element={<Store/>}/>
      <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
      <Route path="/conditions" element={<Condition/>}/>
      <Route path="/community" element={<Community/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
