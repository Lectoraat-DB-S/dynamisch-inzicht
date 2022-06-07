import React, { Component } from "react";
import WorldMap from "./components/worldMap";
import Themes from "./components/themes";
import "../src/style/App.css";

export default class App extends Component {
  public render = () => {
    return (
      <>
        <div className="col-4">
          <Themes />
        </div>
        <div className="col-8">
          <WorldMap />
        </div>
      </>
    );
  };
}
