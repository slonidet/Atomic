import { createStackNavigator } from 'react-navigation';

import HistoryScreen from '../history';

export default createStackNavigator(
  {
    History: {
      screen: HistoryScreen,
      navigationOptions: { header: null },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'History',
  },
);
