import React, { PureComponent } from 'react';
import { combineReducers } from 'redux'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { reduxifyNavigator, createNavigationReducer } from 'react-navigation-redux-helpers';

import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import { navigationPropConstructor } from './stores/middlewares/navigation';
import MainRouter from './screens';
import Bottom from './components/bottom';

import config from '../configs/env.json';

import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/home';
import SettingsScreen from './screens/settings';


import AppNavigator from './screens/_containers/main';

const mapStateToProps = (state) => ({
  state: state.nav,
});

class MainComponent extends PureComponent {

  // static router = MyNavigator.router;

  render() {
    const App = reduxifyNavigator(AppNavigator, 'root');
    const Navigation = connect(mapStateToProps)(App);
    return (
        <Navigation />
    );
  }
}

export default MainComponent;
