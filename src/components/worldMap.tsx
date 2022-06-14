import { marker } from "leaflet";
import React, { Component, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../style/WorldMap.css";
import L from 'leaflet'

export default class WorldMap extends Component {

  public render = () => {
    const MyMarkers = ({ data }: {data: any}) => {
      return data.map(({ lat, lng, name }: any, index: React.Key | null | undefined) => (
        <Marker
          key={index}
          position={{ lat, lng }}
        >
          <Popup>{name}</Popup>
        </Marker>
      ));
    }

    return (
      <>
<div className="App">
<MapContainer center={[52.50563888516816, 6.08692708711251]} zoom={7}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
  <MyMarkers data={require("../mock-response/perron038.json")}/>
</MapContainer>
</div>
      </>
    );
  };
}