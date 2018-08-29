import React from 'react';
import { Provider } from 'react-redux';
import MainComponent from './app/index';
import store from './app/stores';

const App = () =>
  <Provider store={store}>
    <MainComponent/>
  </Provider>;

export default App;
