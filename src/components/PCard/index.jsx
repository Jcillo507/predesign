import React from "react";
import './pcard.scss'

const PCard = (props) => {
  return (
    <div>
      <img className='project-img'src={props.image} />
    </div>
  );
};

export default PCard;
