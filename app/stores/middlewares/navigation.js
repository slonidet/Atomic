import {
  createReactNavigationReduxMiddleware,
  createNavigationPropConstructor,
} from 'react-navigation-redux-helpers';

export default createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const navigationPropConstructor = createNavigationPropConstructor('root');
