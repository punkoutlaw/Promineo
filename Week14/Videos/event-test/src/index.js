import React from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import Container from './container';
import SecondContainer from './second-container';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Remove <React.StrictMode> to prevent state from firing (rendering) twice.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SecondContainer />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
