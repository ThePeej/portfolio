import React, { Component } from 'react';

class Navigation extends Component {
  state = {  }

  handleClick() {

    let menu = document.getElementById('nav')
    if (menu.style.display === '' || menu.style.display === "none" ) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  render() {
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" onClick={this.handleClick} />
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
