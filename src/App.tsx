import React, { Component } from "react";
import WorldMap from "./components/worldMap";
import Themes from "./components/themes";
import "../src/style/App.css";
import Collabs from "./components/Collabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarRef from "./components/NavbarRouter";

export default class App extends Component {
  public render = () => {
    return (
      <>
        <Router>
          <div className="col-4">
            <NavbarRef />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Themes />
                </Route>
                <Route exact path="/samenwerkingsverbanden">
                  <Collabs selectedCollab={""}/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
        <div className="col-8">
          <WorldMap selected={""}/>
        </div>
      </>
    );
  };
}
