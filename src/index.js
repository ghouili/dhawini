import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ProviderContext } from './Hooks/Context/MainContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <ProviderContext>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ProviderContext>

,
  document.getElementById('root')
);

