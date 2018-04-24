import React from "react";
import { FaFilePdfO, FaPaw } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";
import resume from "../assets/resume.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="four columns profile">
        <img className="profile-pic" src={profilePic} alt="PJ Frias" />
      </div>
      <div className="eight columns main-col">
        <a href="https://www.youtube.com/channel/UCDFwOPfbe25fR-ScaMz2uig" title="super secret link to my woodworking YT channel" target="_blank">
          <h1>I love to create.</h1>
        </a>
        <p>
          Whether it be through programming, woodworking, photography, or cooking, the intersection of creative problem solving and technical challenge is what I live for. I pride myself in being able to use what I make, and that is one of the most satisfying feelings for me. Better yet, building something that others will be able to use and enjoy, knowing my reputation rests on the quality of the final product, pushes me to always challenge myself and improve my skills in everything I do.
        </p>
        <p>
          I’ve built social platforms focused on community-empowerment, architectured an ecommerce webapp, and developed software to streamline processes and improve efficiency. I’m passionate about building up communities and committed to strengthening Baltimore’s software developer culture.
        </p>
        <p>
          In my free time, I enjoy playing ultimate frisbee, losing friendships over board games, trying new whiskeys, and relaxing at home with my wife and our child who is a cat. <FaPaw/>
        </p>
        <div className="row">
          <div className="columns download">
            <p>
              <a href={resume} className="button" target="_blank">
                <FaFilePdfO /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
