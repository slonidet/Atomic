import React, { PureComponent } from 'react';
import { 
  Platform, 
  StyleSheet, } from 'react-native';

import MainRouter from './screens/index';
import Initial from './screens/initial/initial';
import CreateWallet from './screens/create/createWallet';
import RestoreWallet from './screens/create/restoreWallet';
import EnterPin from './screens/pin/enterPin';


// import store from './stores';
// import { navigationPropConstructor } from './stores/middlewares/navigation';

// import config from '../configs/env.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1E2743',
  }
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
      // <Provider store={store}>
      // <Initial />
      // <CreateWallet />
      // <RestoreWallet />
      <EnterPin />
      
      // </Provider>
    );
  }
}

export default App;
