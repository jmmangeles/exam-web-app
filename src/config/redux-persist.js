import storage from 'redux-persist/lib/storage';

const reduxPersistConfig = {
  auth: {
    key: 'Auth',
    storage,
    whitelist: [ 'accessToken', 'user' ],
  },
  shared: {
    key: 'Auth',
    storage,
  },
};

export default reduxPersistConfig;
