import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import WalletsScreenContainer from './_containers/wallets';
import ExchangeScreenContainer from './_containers/exchange';
import HistoryScreenContainer from './_containers/history';
import SwapScreenContainer from './_containers/swap';
import SettingsScreenContainer from './_containers/settings';

const mapStateToProps = (state) => ({
  state: state.nav,
});

export const Router = createStackNavigator(
  {
    Wallets: {
      screen: WalletsScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
    Exchange: {
      screen: ExchangeScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
    History: {
      screen: HistoryScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
    Swap: {
      screen: SwapScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
    Settings: {
      screen: SettingsScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false },
    },
  },
  {
    cardStyle: {
      flex: 1,
    },
    initialRouteName: 'Wallets',
  },
);

export default connect(mapStateToProps)(reduxifyNavigator(Router, 'root'));
