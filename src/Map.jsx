import React from "react";
// import { useEffect } from "react";

import './Map.css'

import { MapContainer,TileLayer, useMap, Marker,Popup } from "react-leaflet";

const Map = ({ coordinates }) => {
  return (
    <div id="map">
      <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
