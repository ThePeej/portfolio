import React from "react";
import {
  FaLinkedinSquare,
  FaGithub,
  FaMedium,
  FaAt,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/pjfrias/" target="_blank">
        <FaLinkedinSquare />
      </a>
    </li>

    <li>
      <a href="https://github.com/ThePeej" target="_blank">
        <FaGithub />
      </a>
    </li>
    
    <li>
      <a href="https://medium.com/@peejfrias" target="_blank">
        <FaMedium />
      </a>
    </li>
     
    <li>
      <a href="https://twitter.com/NotNotPJ" target="_blank">
        <FaTwitter />
      </a>
    </li>

    {/* <li>
      <a href="#testimonials">
        <FaAt />
      </a>
    </li> */}

  </ul>
);

export default SocialLinks;
