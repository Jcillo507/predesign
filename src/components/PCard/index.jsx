import React from "react";
import "./pcard.scss";

const PCard = props => {
  return (
    <div className="pcard-ctr">
      <img className="project-img" src={props.image} />
      <div className="overlay">
        <div className="text">{props.name}</div>
        <div className="text">{props.desc}</div>
        <div className="text"> {props.tech}</div>
        <form action={props.address}>
          <button type="submit">Visit Site</button>
        </form>
      </div>
    </div>
  );
};

export default PCard;
