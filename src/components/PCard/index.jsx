import React from "react";
import './pcard.scss'

const PCard = (props) => {
  return (
    <div className="pcard-ctr">
      <img className="project-img" src={props.image} />
      <div className="overlay">
        <div class="text">Hello World</div>
      </div>
    </div>
  );
};

export default PCard;
