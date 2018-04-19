import React from "react";
import { FaFileTextO } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";
import resume from "../assets/resume.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Whether it be through programming, photography, woodworking or cooking, I love to make things. Being able to make something that someone can use, be that myself or someone else, is one of the most satisfying feelings for me. With everything I build, I know it carries my reputation with it, so I always put my best foot forward. 
        </p>
        <p>
          Full stack web developer with a knack for solving problems, delivering elegant solutions, and building software that drives change. Experience in Ruby on Rails, Javascript frameworks (Node.js / Express, React.js), databases (sqlite3, MongoDB), and general web-development (HTML, CSS, JQuery, Bootstrap). I bring strong skills in project management, team collaboration, and customer satisfaction that help industry leaders improve productivity and increase sales.
        </p>
        <p>
          I’ve built social platforms focused on community-empowerment, architectured an ecommerce webapp, and developed software to streamline processes and improve efficiency. I’m passionate about building up communities and committed to strengthening Baltimore’s software developer culture.
        </p>
        <div className="row">
          <div className="columns download">
            <p>
              <a href={resume} className="button">
                <FaFileTextO /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
