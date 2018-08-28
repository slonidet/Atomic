import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import store from './stores';
// import { navigationPropConstructor } from './stores/middlewares/navigation';
import MainRouter from './screens';
import Bottom from './components/bottom';

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

const Comp = (props) => {
  console.log('!!!!', props);
  return <View></View>;
}

class App extends PureComponent {

  tabs = [
    {
      key: 'games',
      icon: 'search',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'movies-tv',
      icon: 'search',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'music',
      icon: 'search',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  // constructor(...args) {
  //   super(...args);
  //   this.renderTab = this.renderTab.bind(this);
  // }
  //
  // renderIcon(icon) {
  //   return ({ isActive }) => (
  //     <FontAwesomeIcon size={24} color="white" name={icon} />
  //   );
  // }
  //
  // renderTab({ tab, isActive }) {
  //   return (
  //     <FullTab
  //       isActive={isActive}
  //       key={tab.key}
  //       label={tab.label}
  //       renderIcon={this.renderIcon(tab.icon)}
  //     />
  //   );
  // }

  render() {
    const Navigation = reduxifyNavigator(MainRouter, 'root');
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
          <View style={{ flex: 1 }}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <Bottom />
          </View>
        </View>
      </Provider>
    );
  }
}

export default App;
