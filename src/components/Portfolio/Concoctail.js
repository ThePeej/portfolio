import React from 'react';
// import ConcoctailHome from "../../assets/images/concoctail-home.png";
// import ConcoctailRandom from "../../assets/images/concoctail-random-2.png";
import ConcoctailMybar from "../../assets/images/concoctail-mybar.png";

import { FaYoutubePlay, FaGithub } from "react-icons/lib/fa";

const Concoctail = () => {
  return (
    <div>
      <div className="summary">
        <h2>Concoctail</h2>
        <h4>An app that curates cocktail recipes based off your home bar</h4>
      </div>
      <div className="columns portfolio-item">
        <a href={ConcoctailMybar} target="_blank">
          <img alt="Concoctail App" src={ConcoctailMybar} />
        </a>
      </div>
      <div className="columns portfolio-item description">
        <ul>
          <li>Built using React & Redux to optimize user interface and define user experience</li>
          <li>Incorporated Materialize CSS framework to design front end</li>
          <li>Utilized Ruby on Rails API backend to persist and provide data</li>
          <li>Designed the database schema and configured ActiveRecord associations</li>
        </ul>
        <a href="https://youtu.be/N7T00x1aQm4" target="_blank" className="video-demo button"><FaYoutubePlay/> Video Demo</a>
        <a href="https://github.com/ThePeej/concoctail-react-app" target="_blank" className="github button"><FaGithub/> Github Repo</a>
      </div>
      <hr />
    </div>
  );
}

export default Concoctail;