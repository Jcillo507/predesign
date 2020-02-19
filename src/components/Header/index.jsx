import React from 'react'

import Logo from '..//../assets/logo.png'

import './header.scss'

const Header = ()=>{
  return(
    <div className='header-ctr'>
      <div className='header-left'>
      <img  className='header-logo'src={Logo}/>
      </div>
        <div className='header-right'>
          <a className='header-link'>Projects</a>
          <a className='header-link'>Skills</a>
          <a className='header-link'>Contact</a>
        </div>
    </div>
  )
}

export default Header