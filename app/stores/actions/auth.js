import {
  SIGN_IN,
  SIGN_UP,
} from '../constants/auth';

export const signIn = payload => ({
  type: SIGN_IN,
  payload,
});

export const signUp = payload => ({
  type: SIGN_UP,
  payload,
});
