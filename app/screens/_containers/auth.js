import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../login';

export default createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Login',
    cardStyle: {
      flex: 1,
    },
    animationEnabled: false,
    swipeEnabled: false,
  },
);
