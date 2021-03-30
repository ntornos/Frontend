import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Context from './components/Context';
import { Provider } from 'react-redux';

import { store } from './redux/store';

render(
  <Provider store={store}>
    <Context>
      <App />
    </Context>
  </Provider>,
  document.getElementById('root')
);
