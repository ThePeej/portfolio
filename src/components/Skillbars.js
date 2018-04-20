import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Experience in Ruby on Rails, Javascript and Javascript frameworks (React.js, Node.js), databases (sqlite3, MongoDB), and general web-development (HTML, CSS, JQuery, Bootstrap). Always excited to learn new technologies to better suit projects and make ideas come to life.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>NodeJS</em>
          </li>
          <li>
            <span className="bar-expand ruby-on-rails" />
            <em>Ruby on Rails</em>
          </li>
          <li>
            <span className="bar-expand mongodb" />
            <em>MongoDB</em>
          </li>
          <li>
            <span className="bar-expand sqlite3" />
            <em>Sqlite3</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
