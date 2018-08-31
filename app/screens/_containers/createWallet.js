import { createStackNavigator } from 'react-navigation';

import CreateNewWallet from '../create_wallet/createNewWallet';
import Initial from '../create_wallet/initial';
import RestoreWallet from '../create_wallet/restoreWallet';

export default createStackNavigator(
  {
    Initial: {
      screen: Initial,
      navigationOptions: { header: null },
    },
    CreateNewWallet: {
      screen: CreateNewWallet,
      navigationOptions: { header: null },
    },
    RestoreWallet: {
      screen: RestoreWallet,
      navigationOptions: { header: null },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Initial',
  },
);
