import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };
  return (
    <>
      <h1 style={{ margin: "20px" }}>EXPERIENCE</h1>
      <div className="container tabs">
        <div className="tab-header">
          <div onClick={() => updateToggle(1)}>
            <h5 className={toggle === 1 ? "color-yellowgreen" : "color-white"}>
              Jr. Developer
            </h5>
          </div>
          <div onClick={() => updateToggle(2)}>
            <h5 className={toggle === 2 ? "color-yellowgreen" : "color-white"}>
              MERN Stack Developer
            </h5>
          </div>
          <div onClick={() => updateToggle(3)}>
            <h5 className={toggle === 3 ? "color-yellowgreen" : "color-white"}>
              Wordpress Developer
            </h5>
          </div>
        </div>
        <div className="tab-content">
          <div
            className={`active ${toggle === 1 ? "show-content" : "content"}`}
            style={{ textAlign: "justify", marginLeft: "15px" }}
          >
            <h2>Jr. Developer</h2>
            <h4 style={{ color: "yellowgreen" }}>Digital Savers Pvt. Ltd.</h4>
            <h6>
              <i
                class="fa-solid fa-calendar-days"
                style={{
                  margin: " 0 10px 0 0",
                  color: "yellowgreen",
                  fontSize: "20px",
                }}
              ></i>
              Feb 2023 – March 2024
              <span style={{ margin: "10px" }}>
                <i
                  class="fa-solid fa-location-dot"
                  style={{
                    margin: "10px",
                    color: "yellowgreen",
                    fontSize: "20px",
                  }}
                ></i>
                Khargone
              </span>
            </h6>

            <p>
              <span style={{ color: "yellowgreen" }}> • </span>I effectively
              managed frontend and backend architecture development, ensuring
              the implementation of best practices. I actively collaborated on
              requirements gathering and contributed to team meetings.
              <br />
              <span style={{ color: "yellowgreen" }}> • </span> Conducting
              Events & Workshops, Connecting with Schools & Colleges.
            </p>
          </div>
          <div
            className={` active ${toggle === 2 ? "show-content" : "content"}`}
            style={{ textAlign: "justify", marginLeft: "15px" }}
          >
            <h2 style={{ color: "yellowgreen" }}>MERN Stack Developer</h2>
            <h4>Edtech Savers IT Training Institute</h4>
            <h6>
              <i
                class="fa-solid fa-calendar-days"
                style={{
                  margin: " 0 10px 0 0",
                  color: "yellowgreen",
                  fontSize: "20px",
                }}
              ></i>
              Aug 2022 – Jan 2023
              <span style={{ margin: "10px" }}>
                <i
                  class="fa-solid fa-location-dot"
                  style={{
                    margin: "10px",
                    color: "yellowgreen",
                    fontSize: "20px",
                  }}
                ></i>
                Khargone
              </span>
            </h6>
            <p>
              <span style={{ color: "yellowgreen" }}> • </span> I completed
              training at Edtech Savers IT Training Institute as a MERN Stack
              Developer, where I gained expertise in crafting innovative and
              creative projects.
            </p>
          </div>
          <div
            className={` ${toggle === 3 ? "show-content" : "content"}`}
            style={{ textAlign: "justify", marginLeft: "15px" }}
          >
            <h2>Wordpress Developer</h2>
            <h4 style={{ color: "yellowgreen" }}>
              Edtech Savers IT Training Institute
            </h4>
            <h6>
              <i
                class="fa-solid fa-calendar-days"
                style={{
                  margin: " 0 10px 0 0",
                  color: "yellowgreen",
                  fontSize: "20px",
                }}
              ></i>
              Feb 2023 – March 2024
              <span style={{ margin: "10px" }}>
                <i
                  class="fa-solid fa-location-dot"
                  style={{
                    margin: "10px",
                    color: "yellowgreen",
                    fontSize: "20px",
                  }}
                ></i>
                Khargone
              </span>
            </h6>
            <p>
              <span style={{ color: "yellowgreen" }}> • </span> My expertise
              lies in implementing innovative solutions, ensuring seamless
              content delivery and management for clients across diverse
              industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
