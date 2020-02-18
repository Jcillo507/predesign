import React from 'react'

import Logo from '..//../assets/logo.png'

import './header.scss'

const Header = ()=>{
  return(
    <div className='header-ctr'>
      <div className='header-left'>
      <img src={Logo}/>
      </div>
        <div className='header-right'>
          <a>Projects</a>
          <a>Skills</a>
          <a>Contact</a>
        </div>
    </div>
  )
}

export default Header