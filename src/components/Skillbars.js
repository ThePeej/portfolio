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
        Full stack web developer with a knack for solving problems, delivering elegant solutions, and building software that drives change. Experience in Ruby on Rails, Javascript frameworks (Node.js / Express, React.js), databases (sqlite3, MongoDB), and general web-development (HTML, CSS, JQuery, Bootstrap). I bring strong skills in project management, team collaboration, and customer satisfaction that help industry leaders improve productivity and increase sales.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand photoshop" />
            <em>Photoshop</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Illustrator</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Wordpress</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Nodejs</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
