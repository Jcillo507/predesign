import React from "react";
import Fade from "react-reveal/Fade";

import ReactLogo from "..//../assets/skills/react-logo.png";
import CssLogo from "..//../assets/skills/css-logo.png";
import HtmlLogo from "..//../assets/skills/html-logo.png";
import JsLogo from "..//../assets/skills/js-logo.png";
import SassLogo from "..//../assets/skills/sass-logo.png";
import SwiftLogo from "..//../assets/skills/swift-logo.png";

const Skills = () => {
  return (
    <section className="skills">
      <Fade left>
        <div className="skills__card-ctr">
          <img src={ReactLogo} alt="react logo" />
          <img src={SassLogo} alt="sass logo" />
          <img src={JsLogo} alt="js logo" />
          <img src={CssLogo} alt="css logo" />
          <img src={HtmlLogo} alt="html logo" />
          <img src={SwiftLogo} alt="swift logo" />
        </div>
      </Fade>
      <Fade right>
        <div className="skills__title-ctr">
          <h2 className="skills__title">02. HOW</h2>
          <p className="skills__subtitle">I am an expert in:</p>
          <ul>
            <li>Web Development</li>
            <li>Creative Web Design</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
