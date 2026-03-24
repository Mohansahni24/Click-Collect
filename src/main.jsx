import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store'; // Import property store
import App from './App';
import { Toaster } from "react-hot-toast";
import "leaflet/dist/leaflet.css";
// import './styles/App.css';
// import './styles/components.css';
// import './styles/utilities.css';
import './index.css'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
         <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937", // dark gray
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "12px",
            fontSize: "14px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          },
          success: {
            style: {
              background: "rgba(0,0,0,0.9)", // green
            },
          },
          error: {
            style: {
              background: "rgba(0,0,0,0.9)",
            },
          },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>
);