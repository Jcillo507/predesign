import React from "react";

import SCard from "../SCard/";

import ReactLogo from "..//../assets/skills/react-logo.png";
import CssLogo from "..//../assets/skills/css-logo.png";
import HtmlLogo from "..//../assets/skills/html-logo.png";
import JsLogo from "..//../assets/skills/js-logo.png";
import RubyLogo from "..//../assets/skills/ruby-logo.png";
import SassLogo from "..//../assets/skills/sass-logo.png";

import "./skills.scss";

const Skills = () => {
  return (
    <div className="skill-ctr" id='skills'>
      <h2 className='skills-title'>Skills</h2>
      <div className="skill-card-ctr">
        <SCard image={ReactLogo} />
        <SCard image={CssLogo} />
        <SCard image={HtmlLogo} />
        <SCard image={JsLogo} />
        <SCard image={RubyLogo} />
        <SCard image={SassLogo} />
      </div>
    </div>
  );
};

export default Skills;
