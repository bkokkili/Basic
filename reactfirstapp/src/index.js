import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './App';
import Movie from './movieTiltle';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*react will always render one component*/ 
<div>
  <Button/>
  <Movie/>
  </div>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
