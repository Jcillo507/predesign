import React from "react";

import Logo from "..//../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-ctr">
        <img className="header__logo" src={Logo} />
        <p className="header__logo-text">Joe Cillo</p>
      </div>
      <nav className="header__link-ctr">
        <div className="header__dropdown">
          <button className="header__dropdown-btn" >
            <a className="header__link" href="#projects">Projects</a>
          </button>
          <div className="header__dropdown-content">
            <a href="https://stupefied-shaw-023514.netlify.com/">
              Sample Company Website
            </a>
            <a href="https://jccn.herokuapp.com/">CryptoNews</a>
            <a href="https://venu-app-v3.herokuapp.com/">Venu</a>
            <a href="http://jccountry.surge.sh/">Country Info</a>
            <a href="https://jcillo507.github.io/dont-be-late/">
              Don't Be Late
            </a>
            <a href="http://postr-jc.surge.sh/">Postr</a>
          </div>
        </div>
        <a href="#contact" className="header__link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
