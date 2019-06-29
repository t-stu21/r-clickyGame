import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="nav">
    <div className="score text-center">{props.score}</div>
  </div>
);

export default Nav;
