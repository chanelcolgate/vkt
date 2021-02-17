import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routing-basic/app-1.js';
import ProductList from './voting-app/app-1.js';
import reportWebVitals from './reportWebVitals';
import TimerDashboard from './time_tracking_app/app-2.js';

ReactDOM.render(
    <TimerDashboard />,
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
