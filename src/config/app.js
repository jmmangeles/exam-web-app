export default {
  // prevent redirection if 401 is received
  whitelistUrl: [
    '/login',
  ],
  appVersion: process.env.REACT_APP_VERSION || '1.0.0',
  apiUrl: `${process.env.REACT_APP_API_URL}`,
};
