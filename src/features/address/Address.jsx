import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../../components/UI/LocationMarker";
import LocationCrossHair from "../../assets/images/location-crosshair.svg";
import {useDispatch} from 'react-redux';
import {addShippingAddress} from '../cart/cartSlice';
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [addressData, setAddressData] = useState({
    name: "",
    phone: "",
    houseNo: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    latlng: null
  });

  // center for map, adjustable when user picks or locates
  const [mapCenter, setMapCenter] = useState([28.6139, 77.2090]);
  const [initialPosition, setInitialPosition] = useState(null);
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const handleChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value
    });
  };


  const handleSaveAddress = () =>{
      // validate required fields
      const {name, phone, address, city, state, zip} = addressData;
      if(!name || !phone || !address || !city || !state || !zip){
          alert("Please fill all required fields");
          return;
      }
      dispatch(addShippingAddress(addressData));
        alert("Address saved successfully!");
  }

  return (
    <div>
      <h3>Address Details</h3>
      <div className="address-container">
        <div className="map-container">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          setAddressData={setAddressData}
          initialPosition={initialPosition}
        />
      </MapContainer>

       <button
        type="button"
        className="btn btn-secondary mb-2"
        onClick={() => {
          if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
          }
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude: lat, longitude: lng } = pos.coords;
              setMapCenter([lat, lng]);
              setInitialPosition([lat, lng]);
              // reverse geocode
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
                  // scroll the form into view after data is set
                  if (formRef.current) {
                    formRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                });
            },
            (err) => {
              console.error(err);
              alert("Unable to retrieve your location");
            }
          );
        }}
      >   
        <img src={LocationCrossHair} alt="" />
       
        <span> Use Current Location</span>
      </button>
      </div>

        <div className="text-container" ref={formRef}>
      <form>
          
          <div className="form-group">
      
          <input
            name="name"
            value={addressData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your full name*"
            style={{textTransform: "capitalize"}}
          />
        </div>

        <div className="form-group">
     
          <input
            name="phone"
            value={addressData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="10-digit mobile number*"
          />
        </div>

        <div className="form-group">
      
          <input
            name="houseNo"
            value={addressData.houseNo}
            onChange={handleChange}
            className="form-control"
            placeholder="House No., Building Name, Street Name"
            style={{textTransform: "capitalize"}}
          />
        </div>

        <div className="form-group">
       
          <input
            name="address"
            value={addressData.address}
            onChange={handleChange}
            className="form-control"
            placeholder="Area, Colony, Street, Sector, Village"
          />
        </div>

        <div className="form-group">
      
          <input
            name="city"
            value={addressData.city}
            onChange={handleChange}
            className="form-control"
            placeholder="City"
          />
        </div>

        <div className="form-group">
     
          <input
            name="state"
            value={addressData.state}
            onChange={handleChange}
            className="form-control"
            placeholder="State"
          />
        </div>

        <div className="form-group">
         
          <input
            name="zip"
            value={addressData.zip}
            onChange={handleChange}
            className="form-control"
              placeholder="Pin Code"
          />
        </div>

        
      </form>
        <div className="save-btn">
          <button type="button" onClick={() => {handleSaveAddress(); navigate('/cart'); }} >
            Save Address
          </button>
        </div>


     
        </div>
      
      
      </div>
    </div>
  );
};

export default Address;