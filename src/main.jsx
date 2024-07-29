import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import AverageApp from './components/AverageApp';



ReactDOM.createRoot( document.querySelector("#root")).render(
    <React.StrictMode>
       <AverageApp></AverageApp>
    </React.StrictMode>
);