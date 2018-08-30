import { createStackNavigator } from 'react-navigation';

import SettingsScreen from '../settings';

export default createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: { header: null },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Settings',
  },
);
