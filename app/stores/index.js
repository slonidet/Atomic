import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { sagaMiddleware, navigationMiddleware } from './middlewares';
import makeRootReducer from './reducers';
import rootSaga from './sagas';

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [sagaMiddleware, navigationMiddleware];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  const composeEnhancers = composeWithDevTools({});

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore();
