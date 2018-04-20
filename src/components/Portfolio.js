import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import ConcoctailHome from "../assets/images/concoctail-home.png";
import ConcoctailRandom from "../assets/images/concoctail-random-2.png";
import ConcoctailMybar from "../assets/images/concoctail-mybar.png";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Some of My Work</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-halves s-bgrid-halves cf"
        >
          <div>
            <h2>Concoctail</h2>
            <h4>An app that curates cocktail recipes based off your home bar</h4>
            <div className="columns portfolio-item">
              <a href={ConcoctailMybar} target="_blank">
                <img alt="Concoctail App" src={ConcoctailMybar} />
              </a>
            </div>
            <div className="columns portfolio-item description">
              <ul>
                <li> Built using React & Redux to optimize user interface and define user experience</li>
                <li> Incorporated Materialize CSS framework to design front end</li>
                <li> Utilized Ruby on Rails API backend to persist and provide data</li>
                <li> Designed the database schema and configured ActiveRecord associations</li>
              </ul>
              <button className="video-demo button">Video Demo</button>
              <button className="github button">Project Github Repo</button>
            </div>
          </div>
          <hr/>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title="">
                <img alt="" src={Judah} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Concoctails</h5>
                    <p>A webapp for finding cocktail recipes based off your home bar</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title="">
                <img alt="" src={IntoTheLight} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Into The Light</h5>
                    <p>Photography</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
