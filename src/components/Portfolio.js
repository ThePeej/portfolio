import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Concoctail from './Portfolio/Concoctail'
import Prayers from './Portfolio/Prayers'
import PortfolioSite from './Portfolio/PortfolioSite'

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Some of My Work</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-halves s-bgrid-halves cf"
        >
          <div className="concoctail">
            <Concoctail/>
          </div>
          <div className="prayers">
            <Prayers/>
          </div>
          <div className="online-portfolio-site">
            <PortfolioSite/>
          </div>
          
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
