import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
