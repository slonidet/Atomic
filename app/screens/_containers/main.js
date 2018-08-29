import { createStackNavigator } from 'react-navigation';
import SettingsScreen from './settings';
import WalletsScreen from './wallets';
import ExchangeScreen from './exchange';
import HistoryScreen from './history';
import SwapScreen from './swap';

export default createStackNavigator(
  {
    Wallets: {
      screen: WalletsScreen,
      navigationOptions: { header: null },
    },
    Exchange: {
      screen: ExchangeScreen,
      navigationOptions: { header: null },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: { header: null },
    },
    Swap: {
      screen: SwapScreen,
      navigationOptions: { header: null },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Wallets',
    headerMode: 'none',
  },
);
