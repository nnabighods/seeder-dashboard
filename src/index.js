import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalStyles} from './styles/GlobalStyles';
// GlobalStyles is component, must be added in document 

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);
