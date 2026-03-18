import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

const LocationMarker = ({ setAddressData, initialPosition }) => {
  const [position, setPosition] = useState(null);

  // set initial position if provided (e.g. from geolocation button)
  React.useEffect(() => {
    if (initialPosition) {
      setPosition(initialPosition);
    }
  }, [initialPosition]);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          setAddressData({
            address: data.display_name,
            city: data.address.city || data.address.town,
            state: data.address.state,
            zip: data.address.postcode,
            latlng: [lat, lng]
          });
        });
    }
  });

  return position ? <Marker position={position} /> : null;
};

export default LocationMarker;