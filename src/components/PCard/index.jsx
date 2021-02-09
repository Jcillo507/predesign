import React from "react";
import Fade from "react-reveal/Fade";

const PCard = (props) => {
  return (
    <div className="project">
      <Fade bottom>
      <img src={props.image} />
      <p className="project__tech"> {props.tech}</p>
      <p className="project__name">{props.name}</p>
      <p className="project__desc">{props.desc}</p>
      <a href={props.address} target="_blank">
        <div className="project__link">Visit</div>
      </a>
      </Fade>
    </div>
  );
};

export default PCard;
