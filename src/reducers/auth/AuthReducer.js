import { handleActions } from 'redux-actions';

import {
  loginAction,
  logoutAction,
  clearUserTokenAction,
  getUserDetailsAction,
} from './AuthActionConfig';

// reducers
const defaultState = {
  accessToken: null,
  user: {},
};

const reducer = handleActions({
  [loginAction](state, { payload }) {
    return {
      ...state,
      accessToken: payload.access_token,
      user: payload.user,
    };
  },

  [logoutAction]() {
    return defaultState;
  },

  [getUserDetailsAction](state, { payload }) {
    return {
      ...state,
      user: payload,
    };
  },

  [clearUserTokenAction]() {
    return defaultState;
  },
}, defaultState);

export default reducer;
