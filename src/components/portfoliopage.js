import React from "react";
import { Link } from "react-router-dom";

const portfolio = () => (
  <div>
    <h1>This is my portfolio section</h1>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
  </div>
);

export default portfolio;
