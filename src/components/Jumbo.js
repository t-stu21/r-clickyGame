import React from "react";
import "./Jumbo.css";

const Jumbo = props => (
  <div className="jumbotron jumbotron-fluid text-center">
    <div className="container">
      <h1 className="display-4">Clicky Game</h1>
      <p className="lead">{props.score}</p>
    </div>
  </div>
);

export default Jumbo;
