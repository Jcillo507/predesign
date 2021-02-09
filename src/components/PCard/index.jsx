import React from "react";

const PCard = (props) => {
  return (
    <div className="project">
      <img src={props.image} />
      <p className="project__tech"> {props.tech}</p>
      <p className="project__name">{props.name}</p>
      <p className="project__desc">{props.desc}</p>
      <a href={props.address} target="_blank">
        <div className="project__link">Visit</div>
      </a>
    </div>
  );
};

export default PCard;
