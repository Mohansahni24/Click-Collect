import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store'; // Import property store
import App from './App';
import "leaflet/dist/leaflet.css";
// import './styles/App.css';
// import './styles/components.css';
// import './styles/utilities.css';
import './index.css'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);