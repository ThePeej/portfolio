import React from 'react';
import PrayersHome from "../../assets/images/prayers-home.png";

import { FaYoutubePlay, FaGithub } from "react-icons/lib/fa";

const Prayers = () => {
  return (
    <div className="prayers">
      <div className="summary">
        <h2>Prayers</h2>    
        <h4>A social space for words of encouragement, a platform built on community</h4>
      </div>
      <div className="columns portfolio-item mobile-only">
        <a href={PrayersHome} target="_blank">
          <img alt="Concoctail App" src={PrayersHome} />
        </a>
      </div>
      <div className="columns portfolio-item description">
        <ul>
          <li>RESTful API backend using Ruby on Rails</li>
          <li>ActiveRecord associations and corresponding database schema</li>
          <li>Bulma framework and custom CSS to design front end</li>
          <li>AJAX resource fetching and posting to drive user experience</li>
          <li>Devise and Pundit for authentication and authorization</li>
          <li>OMniAuth for OAuth authentication with Facebook</li>
        </ul>
        <a href="https://youtu.be/G-wgw7763_E" target="_blank" className="video-demo button"><FaYoutubePlay /> Video Demo</a>
        <a href="https://github.com/ThePeej/prayers-rails-app" target="_blank" className="github button"><FaGithub /> Github Repo</a>
      </div>
      <div className="columns portfolio-item desktop-only">
        <a href={PrayersHome} target="_blank">
          <img alt="Concoctail App" src={PrayersHome} />
        </a>
      </div>
      <hr />
    </div>
  );
}

export default Prayers;