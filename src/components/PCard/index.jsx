import React from "react";
import "./pcard.scss";

const PCard = props => {
  return (
    <div className="pcard-ctr">
      <img className="project-img" src={props.image} />
      <div className="overlay">
        <div className="text title">{props.name}</div>
        <div className="text desc">{props.desc}</div>
        <div className="text tech"> {props.tech}</div>
        <form action={props.address}>
          <button className="pcard-bttn" type="submit">
            Visit Website >
          </button>
        </form>
      </div>
    </div>
  );
};

export default PCard;
