import { FaMapMarkerAlt } from "react-icons/fa";

const LocationPin = ({ text }) => (
  <div className="pin">
    <div className="text-[2rem]">
      <FaMapMarkerAlt />
    </div>
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
