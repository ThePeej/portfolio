import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm PJ</h1>
      <h2 className="responsive-headline"> and I like to make things.</h2>
      <h3>
        I'm a Baltimore based <span>Web Developer, Photographer, and Woodworker</span>
        {/* <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>. */}
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
