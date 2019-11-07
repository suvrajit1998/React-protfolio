import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import notfoundpage from "../components/notfound";
import Header from "../components/header";
import Homepage from "../components/Homepage";
import portfolioitem from "../components/portfolioitem";
import portfolio from "../components/portfoliopage";
import contact from "../components/contact";

const Approuter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/portfolio" component={portfolio} exact={true} />
        <Route path="/portfolio/:id" component={portfolioitem} />
        <Route path="/contact" component={contact} />
        <Route component={notfoundpage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Approuter;
