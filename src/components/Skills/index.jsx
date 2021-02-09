import React from "react";
import Fade from "react-reveal/Fade";


import ReactLogo from "..//../assets/skills/react-logo.png";
import CssLogo from "..//../assets/skills/css-logo.png";
import HtmlLogo from "..//../assets/skills/html-logo.png";
import JsLogo from "..//../assets/skills/js-logo.png";
import SassLogo from "..//../assets/skills/sass-logo.png";
import SwiftLogo from '..//../assets/skills/swift-logo.png'

const Skills = () => {
  return (
    <section className="skills">
      <Fade left>
        <div className="skills__title-ctr">
          <h2 className="skills__title">02. HOW</h2>
          <p className="skills__subtitle">I Specialize in:</p>
          <ul>
            <li>Web Development</li>
            <li>Creative Web Design</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
      </Fade>
      <Fade right>
        <div className="skills__card-ctr">
          <img src={ReactLogo} alt="" />
          <img src={SassLogo} alt="" />
          <img src={JsLogo} alt="" />
          <img src={CssLogo} alt="" />
          <img src={HtmlLogo} alt="" />
          <img src={SwiftLogo} alt="" />
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
