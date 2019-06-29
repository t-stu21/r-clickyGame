import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card col-lg-4" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image} src={require("../images/" + props.image)} />
    </div>
  </div>
);

export default Card;
