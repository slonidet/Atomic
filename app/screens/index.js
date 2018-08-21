import { createStackNavigator } from 'react-navigation';

import AuthScreenContainer from './_containers/auth';

export default createStackNavigator(
  {
    Auth: {
      screen: AuthScreenContainer,
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
