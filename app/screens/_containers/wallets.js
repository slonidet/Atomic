import { createStackNavigator } from 'react-navigation';

import WalletsScreen from '../wallets';

export default createStackNavigator(
  {
    Wallets: {
      screen: WalletsScreen,
      navigationOptions: { header: null },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Wallets',
  },
);
