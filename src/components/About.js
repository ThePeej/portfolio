import React from "react";
import { FaFileTextO, FaPaw } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";
import resume from "../assets/resume.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="four columns profile">
        <img className="profile-pic" src={profilePic} alt="PJ Frias" />
      </div>
      <div className="eight columns main-col">
        <h1>I love making things.</h1>
        <p>
          Whether it be through programming, woodworking, photography, or cooking, the combination of creative problem solving and technical challenge is what I live for. The satisfaction of using something I make, or better yet, knowing that someone else will be able to use and enjoy what I've built, is what fuels me to challenge myself and improve my skills in everything I do.
        </p>
        <p>
          I’ve built social platforms focused on community-empowerment, architectured an ecommerce webapp, and developed software to streamline processes and improve efficiency. I’m passionate about building up communities and committed to strengthening Baltimore’s software developer culture.
        </p>
        <p>
          In my free time, I enjoy playing board games, trying new whiskeys, and relaxing at home with my wife and our child who is a cat. <FaPaw/>
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
