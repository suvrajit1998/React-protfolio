import React from "react";

const portfolioitem = props => (
  <div>
    <h1>We have the Item One</h1>
    <p>This is the First Item From my portfolio {props.match.params.id}</p>
  </div>
);

export default portfolioitem;
