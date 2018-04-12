import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import Routes from './Routes';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
