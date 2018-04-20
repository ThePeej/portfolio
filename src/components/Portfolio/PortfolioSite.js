import React from 'react';
import PortfolioBanner from "../../assets/images/portfolio-banner.png";

import { FaYoutubePlay, FaGithub } from "react-icons/lib/fa";

const PortfolioSite = () => {
  return (
    <div>
      <div className="summary">
        <h2>My Portfolio</h2>
        <h4>An online tool to tell the world about myself</h4>
      </div>
      <div className="columns portfolio-item">
        <a href={PortfolioBanner} target="_blank">
          <img alt="Concoctail App" src={PortfolioBanner} />
        </a>
      </div>
      <div className="columns portfolio-item description">
        <ul>
          <li>Static react app using stateless components</li>
          <li>Styled using highly customized CSS</li>
          <li>Built as a single page app for visual appeal and improved user experience</li>
          <li>Generated using GatsbyJS</li>
        </ul>
        {/* <a href="" target="_blank" className="video-demo button"><FaYoutubePlay /> Video Demo</a> */}
        <a href="https://github.com/ThePeej/portfolio" target="_blank" className="github button"><FaGithub /> Github Repo</a>
      </div>
      <hr />
    </div>
  );
}

export default PortfolioSite;