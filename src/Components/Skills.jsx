import React, { useEffect } from "react";
import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="skills-title">
        <h1>SKILLS</h1>
        <h4 style={{ color: "yellowgreen" }}>
          Here are a few technologies I've been working with recently.
        </h4>
      </div>
      <div className="container skills">
        <div className="items">
          {skills.map((data) => (
            <>
              <div className="item" key={data.id}>
                <img src={`/images/${data.imageSrc}`} alt="hello" />
                <h4>{data.title}</h4>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
