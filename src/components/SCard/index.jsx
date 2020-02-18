import React from 'react'
import './scard.scss'

const SCard = (props)=>{
  return(
    <div className='sc-ctr'>
      <img className='skill-img' src={props.image}/>
    </div>
  )
}

export default SCard