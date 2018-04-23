import React, { Component } from 'react';

class Navigation extends Component {
  state = {}

  render() {
    return (
      <nav id="nav-wrap">
        {/* <button className="mobile-btn" onClick={() => this.handleClick()} /> */}
        <a className="mobile-btn" href="/#nav-wrap" />
        <ul id="nav" className="nav">
          <li>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#skills">
              Skills
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Work
            </a>
          </li>

          {/* <li>
        <a className="smoothscroll" href="#testimonials">
          Testimonials
        </a>
      </li> */}

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
