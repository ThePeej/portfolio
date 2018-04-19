import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm PJ</h1>
      <h2 className="responsive-headline"> and I <span>create</span> things.</h2>
      <h3>
        I'm a software developer who uses technology to drive change, build communities, and empower others to do the same.
      </h3>
      <a href="#contact">
        <button className="button">Let's build something incredible</button>
      </a>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
