import { createStackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';

// import AuthScreenContainer from './_containers/auth';
import Initial from './initial/initial';

export default createStackNavigator(
  {
    Initial: {
      screen: Initial,
      navigationOptions: { header: null, gesturesEnabled: false },
    }
  },
  {
    cardStyle: {
      flex: 1,
    },
    initialRouteName: 'Initial',
  },
);
