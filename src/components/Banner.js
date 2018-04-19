import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I'm PJ!</h1>
      
      <h3>
        I'm a Baltimore-based Web Developer <br/>
        who uses technology to drive change,
      </h3>
      <h2 className="responsive-headline"> and I <span>create</span> things.</h2>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
