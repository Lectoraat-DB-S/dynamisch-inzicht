import React, { Component } from "react";
import WorldMap from "./components/worldMap";
import Themes from "./components/themes";
import "../src/style/App.css";
import Navbar from "./components/Navbar";
import Collabs from "./components/Collabs";


export default class App extends Component {
  public render = () => {
    return (
      <>
        <div className="col-4">
          <Navbar />
        </div>
        <div className="col-8">
          <WorldMap />
        </div>
      </>
    );
  };
}
