import React from 'react';
import ConcoctailHome from "../../assets/images/concoctail-home.png";
import ConcoctailRandom from "../../assets/images/concoctail-random-2.png";
import ConcoctailMybar from "../../assets/images/concoctail-mybar.png";

const Concoctail = () => {
  return (
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
      <hr />
    </div>
  );
}

export default Concoctail;