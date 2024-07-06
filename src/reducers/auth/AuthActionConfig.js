/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';

// Action Declarations
// Suggested Action Name Standard: ORG_MODULE_ACTION_ANY
export const loginAction = createAction('CLIENT_LOGIN');
export const logoutAction = createAction('CLIENT_LOGOUT');
export const clearUserTokenAction = createAction('CLIENT_CLEAR_TOKEN');
export const getUserDetailsAction = createAction('CLIENT_GET_USER_DETAILS');
export const registerUserAction = createAction('CLIENT_REGISTER_USER');
