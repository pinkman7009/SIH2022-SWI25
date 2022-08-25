import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
});

L.Marker.prototype.options.icon = DefaultIcon;

const DashboardMap = ({ acceptedGrievances }) => {
  return (
    <MapContainer
      style={{ height: "50vh" }}
      center={[23.7957, 86.4304]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {acceptedGrievances.map((item) => (
        <Marker position={[item.lat, item.long]} />
      ))}
    </MapContainer>
  );
};

export default DashboardMap;
