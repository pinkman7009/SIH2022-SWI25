import React, { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import MapModal from "./MapModal";

let DefaultIcon = L.icon({
  iconUrl: icon,
});

L.Marker.prototype.options.icon = DefaultIcon;

const DashboardMap = ({ acceptedGrievances }) => {
  const [check, setCheck] = useState(false);
  const [policeAvailablity, setPoliceAvailablity] = useState([]);
  const [hospitalAvailablity, setHospitalAvailablity] = useState([]);
  const [NGOAvailablity, setNGOAvailablity] = useState([]);

  const onClick = async (lat, long) => {
    setCheck(true);
    const policeRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/map?lat=${lat}&long=${long}&type=police`
    );
    setPoliceAvailablity(policeRes.data.results);

    const hospitalRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/map?lat=${lat}&long=${long}&type=hospital`
    );
    setHospitalAvailablity(hospitalRes.data.results);

    const ngoRes = await axios.get(
      `${process.env.REACT_APP_API_URL}/map?lat=${lat}&long=${long}&type=ngo`
    );
    setNGOAvailablity(ngoRes.data.results);
  };

  if (acceptedGrievances.length === 0) return <h2>Loading...</h2>;

  return (
    <div>
      {check && (
        <MapModal
          setCheck={setCheck}
          policeAvailablity={policeAvailablity}
          hospitalAvailablity={hospitalAvailablity}
          NGOAvailablity={NGOAvailablity}
        />
      )}
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
          <Marker
            position={[item.lat, item.long]}
            eventHandlers={{
              click: (e) => {
                onClick(item.lat, item.long);
              },
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default DashboardMap;
