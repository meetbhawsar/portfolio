import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("menuClicked");
    setMenuOpen(!menuOpen);
    console.log("menuopen : ", menuOpen);
  };

  return (
    <nav>
      <div className="left nav_items">Portfolio</div>
      <div className="container nav_bar">
        {/* Portfolio is placed outside of the menu div */}
        <div className="menu" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`right ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav_items" onClick={handleMenuClick}>
            Home
          </Link>
          <Link
            to="/experience"
            className="nav_items"
            onClick={handleMenuClick}
          >
            Experience
          </Link>
          <Link to="/skills" className="nav_items" onClick={handleMenuClick}>
            Skills
          </Link>
          <Link to="/projects" className="nav_items" onClick={handleMenuClick}>
            Projects
          </Link>
          <Link
            to="/certificates"
            className="nav_items"
            onClick={handleMenuClick}
          >
            Certificates
          </Link>
          <Link to="/contact" className="nav_items" onClick={handleMenuClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
