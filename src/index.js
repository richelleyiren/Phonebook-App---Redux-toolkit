import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios";
import store from "./redux-slices/store";
import { Provider } from "react-redux";


axios.defaults.baseURL = "http://localhost:4000";


axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
     <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);


