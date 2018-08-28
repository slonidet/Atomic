import { createStackNavigator } from 'react-navigation';

import { Text } from 'react-native';

import AuthScreenContainer from './_containers/auth';

export default createStackNavigator(
  {
    Auth: {
      screen: () => (<Text>123123</Text>),
      navigationOptions: { header: null, gesturesEnabled: false },
    },
  },
  {
    cardStyle: {
      flex: 1,
    },
    initialRouteName: 'Auth',
  },
);
