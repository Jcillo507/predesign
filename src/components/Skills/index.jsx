import React from 'react'

import SCard from '../SCard/'

import ReactLogo from '..//../assets/skills/react-logo.png'
import CssLogo from '..//../assets/skills/css-logo.png'
import HtmlLogo from "..//../assets/skills/html-logo.png"
import JsLogo from "..//../assets/skills/js-logo.png"
import RubyLogo from "..//../assets/skills/ruby-logo.png";
import SassLogo from "..//../assets/skills/sass-logo.png";

import './skills.scss'


const Skills =()=>{
  return (
    <div className='skill-ctr'>
      <SCard image={ReactLogo} />
      <SCard image={CssLogo} />
      <SCard image={HtmlLogo} />
      <SCard image={JsLogo} />
      <SCard image={RubyLogo} />
      <SCard image={SassLogo} />
    </div>
  );
}

export default Skills