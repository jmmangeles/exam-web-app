import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createDebounce from 'redux-debounce';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducer from './reducers/main';

const config = {
  simple: 300,
};

const debouncer = createDebounce(config);

const persistConfig = {
  key: 'root',
  storage,
  // whitelist should be access token and user only
  // whitelist: [ 'Auth' ],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, debouncer));
const persistor = persistStore(store);

export { store, persistor };
