import {
  generatePostAction, generateGetAction, generateAction,
} from '../../services/ActionDispatcher';

import {
  loginAction,
  logoutAction,
  clearUserTokenAction,
  getUserDetailsAction,
  registerUserAction,
} from './AuthActionConfig';

const deviceData = {
  device_uuid: localStorage.getItem('DEVICE_UUID'),
};

// action request dispatchers
const loginRequest = data => generatePostAction(
  // action name
  loginAction,
  // url
  'auth/login',
  { ...data, ...deviceData },
);

const logoutRequest = () => generatePostAction(
  // action name
  logoutAction,
  // url
  'auth/logout',
  deviceData,
);

const getUserDetailsRequest = () => generateGetAction(
  // action name
  getUserDetailsAction,
  // url
  'auth/me',
);

const registerUserRequest = data => generatePostAction(
  // action name
  registerUserAction,
  // url
  'auth/register',
  data,
);

const clearUserTokenRequest = () => generateAction(
  // action name
  clearUserTokenAction,
);

// register actions here
export {
  // normal dispatch
  clearUserTokenRequest,
  // async (request) dispatch
  // eslint-disable-next-line import/prefer-default-export
  loginRequest,
  logoutRequest,
  getUserDetailsRequest,
  registerUserRequest,
};
