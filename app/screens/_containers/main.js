import { createStackNavigator } from 'react-navigation';

import HomeScreen from "../home";
import SettingsScreen from "../settings";

export default createStackNavigator(
  {
    HomeScreen,
    SettingsScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);
