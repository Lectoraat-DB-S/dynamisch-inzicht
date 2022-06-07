import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../style/WorldMap.css";

export default class WorldMap extends Component {
  public render = () => {
    const perron038: [number, number] = [52.50563888516816, 6.08692708711251];
    return (
      <>
        <MapContainer
          center={[52.50563888516816, 6.08692708711251]}
          zoom={15}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={perron038}>
            <Popup>
              <b>Perron038</b>
              <br />
              Maak de toekomst
            </Popup>
          </Marker>
        </MapContainer>
      </>
    );
  };
}
