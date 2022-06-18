import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../style/WorldMap.css";
import Markers from "./Markers";

interface Props {
  selected: any;
}

export default class WorldMap extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render = () => {
    const selected = this.props;
    console.log(selected);

    return (
      <>
        <div className="App">
          <MapContainer
            center={[52.50563888516816, 6.08692708711251]}
            zoom={10}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers />
          </MapContainer>
        </div>
      </>
    );
  };
}
