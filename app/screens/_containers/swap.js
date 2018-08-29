import { createStackNavigator } from 'react-navigation';

import SwapScreen from '../swap';

export default createStackNavigator(
  {
    Swap: {
      screen: SwapScreen,
      navigationOptions: { header: null },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Swap',
  },
);
