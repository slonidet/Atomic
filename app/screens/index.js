import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import MainScreenContainer from './_containers/main';

const mapStateToProps = (state) => ({
  state: state.nav,
});

export const Router = createStackNavigator(
  {
    Main: {
      screen: MainScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
  },
  {
    cardStyle: {
      flex: 1,
    },
    initialRouteName: 'Main',
  },
);

export default connect(mapStateToProps)(reduxifyNavigator(Router, 'root'));
