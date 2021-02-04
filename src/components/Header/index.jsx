import React from "react";

import Logo from "..//../assets/logo.png";


const Header = () => {
  return (
    <div className="header-ctr">
      <div className="header-left">
        <img className="header-logo" src={Logo} />
      </div>
      <div className="header-right">
        <form className="header-link">
          <div className="dropdown">
            <button className="dropbtn header-link">
              <a href="#projects">Projects</a>
            </button>
            <div className="dropdown-content">
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

          <a href="#skills" className="header-link">
            Skills
          </a>

          <a href="#contact" className="header-link">
            Contact
          </a>
          <a
            className="header-link"
            href="https://drive.google.com/file/d/1p5A0XqmG1Sc1fqiUKKltZQa-qC2bIbV9/view?usp=sharing"
          >
            Resume
          </a>
        </form>
      </div>
    </div>
  );
};

export default Header;
