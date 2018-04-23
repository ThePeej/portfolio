import React from "react";

import Skillbars from "./Skillbars";
import {HTML5, CSS3, Javascript, Ruby, ReactIcon, Node, Bootstrap, Rails, Git, Github, Mocha, Photoshop} from "./Skillicons";

const Skills = () => (
  <section id="skills">
    {/* <Skillbars /> */}
    {/* <Skillicons /> */}
    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <p>
          Experience in Ruby on Rails, Javascript and Javascript frameworks (React.js, Node.js), databases (sqlite3, MongoDB), and general web-development (HTML, CSS, JQuery, Bootstrap). I'm always excited to learn new technologies to better suit projects and bring ideas to life.
        </p>
        <div className="skill-icons">
          <div className="three columns icon">
            <HTML5 />
          </div>
          <div className="three columns icon">
            <CSS3 />
          </div>
          <div className="three columns icon">
            <Javascript />
          </div>
          <div className="three columns icon">
            <Ruby />
          </div>
        </div>

        <hr/>

        <div className="skill-category">
          <div className="three columns icon">
            <Node />
          </div>
          <div className="three columns icon">
            <Rails />
          </div>
          <div className="three columns icon">
            <ReactIcon />
          </div>
          <div className="three columns icon">
            <Bootstrap />
          </div>
        </div>

        <hr />

        <div className="skill-category">
          <div className="three columns icon">
            <Git />
          </div>
          <div className="three columns icon">
            <Github />
          </div>
          <div className="three columns icon">
            <Mocha />
          </div>
          <div className="three columns icon">
            <Photoshop />
          </div>
        </div>      
      </div>
    </div>
  </section>
);

export default Skills;
