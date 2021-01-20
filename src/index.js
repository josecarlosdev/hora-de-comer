import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './include/bootstrap'
import "typeface-roboto";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

