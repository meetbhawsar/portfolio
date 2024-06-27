import React, { useEffect, useRef } from "react";
import pdf from "../Pdf/Mitali Bhawsar Resume.pdf";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Mitali Bhawsar",
        "I'm full stack developer",
        "Web Developer (React js)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>.</h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-2"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            <img src="../images/HomeImages/Mitali Photo.png" alt="assest" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
