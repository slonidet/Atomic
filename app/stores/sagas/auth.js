import { AsyncStorage } from 'react-native';
import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';

import {
  SAVE_CURRENT_USER,
  SIGN_IN,
  SIGN_UP,
} from '../constants/auth';

import adapter from '../adapter';
import { Logger } from '../../utils';

const HANDLERS = {
  * [SIGN_IN](defer, data) {
    try {
      const response = yield call(adapter, {
        method: 'post',
        url: '/auth/login',
        headers: {
          'content-type': 'application/json',
        },
        data,
      });

      // yield AsyncStorage.setItem('token', data.token); // save auth token
      const user = response.data;
      yield put({ type: SAVE_CURRENT_USER, payload: user });
      defer.resolve(user);
    } catch (err) {
      if (err.response != null) {
        const error = new Error(`Store::AuthSagas:signInRequest Request failed with status ${err.response.status} and message ${err.response.data.message}`);
        error.errorMessage = err.response.data.message;
        defer.reject(error);
      } else {
        Logger.error(err);
      }
    }
  },
  * [SIGN_UP](defer, data) {
    try {
      const response = yield call(adapter, {
        method: 'post',
        url: '/auth/signup',
        headers: {
          'content-type': 'application/json',
        },
        data,
      });

      yield HANDLERS[SIGN_IN](defer, { username: data.username, password: data.password });
      defer.resolve(response.data.user);
    } catch (err) {
      if (err.response != null) {
        const error = new Error(`Store::AuthSagas:signUpRequest Request failed with status ${err.response.status} and message ${err.response.data.message}`);
        error.errorMessage = err.response.data.message;
        defer.reject(error);
      } else {
        Logger.error(err);
        defer.reject(err);
      }
    }
  },
};

export function* switchSagasAuth({ type, payload = {} }) {
  const { defer, ...data } = payload;

  const handler = HANDLERS[type];

  if (handler != null) yield* handler(defer, data);
}

export default function* sagaReducerAuth() {
  yield takeEvery('*', switchSagasAuth);
}
