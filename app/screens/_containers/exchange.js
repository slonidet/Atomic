import { createStackNavigator } from 'react-navigation';

import ExchangeScreen from '../exchange';

export default createStackNavigator(
  {
    Exchange: {
      screen: ExchangeScreen,
      navigationOptions: { header: null },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Exchange',
  },
);
