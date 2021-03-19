import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Context from './components/Context';

render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);
