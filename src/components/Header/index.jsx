import React from "react";

import Logo from "..//../assets/logo.png";

import "./header.scss";

const Header = () => {
  return (
    <div className="header-ctr">
      <div className="header-left">
        <img className="header-logo" src={Logo} />
      </div>
      <div className="header-right">
        <a href="#projects" className="header-link">
          <div class="dropdown">
            <button class="dropbtn header-link">Projects</button>
            <div class="dropdown-content">
              <a href="https://stupefied-shaw-023514.netlify.com/">
                Sample Company Website
              </a>
              <a href="https://jccn.herokuapp.com/">CryptoNews</a>
              <a href="https://venu-app-v3.herokuapp.com/">Venu</a>
              <a href="http://jc-ga-p2.surge.sh/">Bet That</a>
              <a href="https://jcillo507.github.io/dont-be-late/">
                Don't Be Late
              </a>
              <a href="http://postr-jc.surge.sh/">Postr</a>
            </div>
          </div>
        </a>
        <a href="#skills" className="header-link">
          Skills
        </a>
        <a href="#contact" className="header-link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
