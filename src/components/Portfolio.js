import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Concoctail from './Portfolio/Concoctail'

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
            <Concoctail/>
          </div>
          <div className="online-portfolio-site">
            <Concoctail/>
          </div>
          
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
