
import AboutUs from "./About/AboutUs";
import Nav from "./Navbar/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
    <Router>
     <Nav/>
      <Routes>
      <Route path="/about_us" element={<AboutUs/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
