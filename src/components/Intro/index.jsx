import React from 'react'
import './intro.scss'
import BG from '..//../assets/intro-bg.png'

const Intro = ()=>{
  return (
    <div className="intro-ctr">
      {/* <img src={BG}/> */}
      <h2 className='intro-text'>
        Developer
        </h2>
        <h2 className='intro-text'>
        Designer
        </h2>
        <h2 className='intro-text'>
        Critical Thinker
        </h2>
        <h2 className='intro-text'>
        Problem-Solver
        </h2>
    </div>
  );
}
export default Intro