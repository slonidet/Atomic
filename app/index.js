import React, { PureComponent } from 'react';
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
