import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import persistConfig from '../config/redux-persist';
import AuthReducer from './auth/AuthReducer';

const reducers = combineReducers({
  Auth: persistReducer(persistConfig.auth, AuthReducer),
});

export default reducers;
