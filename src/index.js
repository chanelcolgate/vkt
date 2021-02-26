import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routing-basic/app-1.js';
import ProductList from './voting-app/app-1.js';
import reportWebVitals from './reportWebVitals';
import TimerDashboard from './time_tracking_app/app-4.js';
import {Component, User} from './prototypes/Component'
import One from './form/01-basic-button'
import Two from './form/02-basic-button'
import Three from './form/03-basic-button'
import Four from './form/04-basic-button'
import Five from './form/05-basic-button'
import Six from './form/06-state-input-multi'
import Seven from './form/07-basic-validation'
import Eight from './form/08-field-component-form'

ReactDOM.render(
    <Eight />,
    document.getElementById('content')
);

// ReactDOM.render(
//  <ProductList />,
//  document.getElementById('content')
// );

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
