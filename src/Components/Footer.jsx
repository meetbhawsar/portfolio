import React from "react";

const Footer = () => {
  return (
    <>
      <hr
        style={{
          border: " 1px solid yellowgreen",
        }}
      />
      <div className="footer">
        <div className="design">
          <h4 style={{ color: "yellowgreen", textAlign: "center" }}>
            Designed and Developed By -
            <span style={{ color: "white" }}>Mitali Bhawsar</span>
          </h4>
        </div>
        <div className="social-icons">
          <a href="https://github.com/meetbhawsar">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mitali-bhawsar-482509233/">
            <img src="../images/linkedin.png" alt="linkedin" />
          </a>

          {/* <i class="fa-brands fa-square-github"></i> */}
          {/* <i class="fa-brands fa-linkedin"></i> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
