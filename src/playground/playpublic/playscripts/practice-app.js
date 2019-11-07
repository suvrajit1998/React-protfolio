"use strict";

console.log("running");

var app = {
  title: "Indecesion",
  subtitle: "app",
  options: []
};

var addone = function addone() {
  console.log("addOne");
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title.toUpperCase()
  ),
  app.subtitle && app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here is your Options" : "Nothing in your Options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  ),
  React.createElement(
    "button",
    { onClick: addone },
    "1+"
  )
);

var approot = document.getElementById("something");
ReactDOM.render(template, approot);
