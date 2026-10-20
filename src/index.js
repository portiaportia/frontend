import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Listings from "./pages/listings/Listings";

const App = () => { 
  return (
    <Home />
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
