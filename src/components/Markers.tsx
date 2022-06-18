import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";

export default class Markers extends Component {
  public render = () => {
    const perron038 = require("../mock-response/perron038.json");
    const MyMarkers = ({ data }: { data: any }) => {
      return data.map(
        ({ lat, lng, name }: any, index: React.Key | null | undefined) => (
          <Marker key={index} position={{ lat, lng }}>
            <Popup>{name}</Popup>
          </Marker>
        )
      );
    };
    return (<MyMarkers data={perron038}/>);
  };
}
