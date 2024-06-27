import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Certificate from "./Components/Certificate";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Home />
                <Skills />
                <Experience />
                <Projects />
                <Certificate />
                <ContactUs />
              </div>
            }
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/admin" element={<Index />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
