import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card col-lg-4">
    <div className="img-container">
      <img
        alt={props.image}
        src={require("../images/" + props.image)}
        id={props.id}
        onClick={props.imageClick}
      />
    </div>
  </div>
);

export default Card;
