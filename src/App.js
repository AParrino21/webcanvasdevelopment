import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Web from "./pages/WebServices";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Marketing from "./pages/Marketing";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/web-services" element={<Web />} />
            <Route exact path="/marketing" element={<Marketing />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
