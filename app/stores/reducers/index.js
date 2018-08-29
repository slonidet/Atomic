import { combineReducers } from 'redux';
import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import authReducer from './auth';
import AppNavigator from '../../screens/_containers/main';

const navReducer = createNavigationReducer(AppNavigator);

export default () => combineReducers({
  auth: authReducer,
  nav: navReducer,
});

export {
  authReducer, AppNavigator,
};
