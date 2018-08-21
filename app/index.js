import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { initializeListeners } from 'react-navigation-redux-helpers';

import store from './stores';
import { navigationPropConstructor } from './stores/middlewares/navigation';
import MainRouter from './screens';

import config from '../configs/env.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends PureComponent {

  componentDidMount() {
    // initializeListeners('root', this.props.nav);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          {/* <MainRouter navigation={navigationPropConstructor(store.dispatch, store.nav)} /> */}
        </View>
      </Provider>
    );
  }
}

export default App;
