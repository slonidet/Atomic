import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './stores';
import MainRouter from './screens';
// import config from '../configs/env.json';

class MainComponent extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    );
  }
}

export default MainComponent;
