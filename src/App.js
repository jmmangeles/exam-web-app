import React, { Suspense, lazy, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'reactstrap';
import uuid from 'react-uuid';

import { store, persistor } from './store';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LazyAppRouter = lazy(() => import('./AppRouter'));

const App = () => {
  useEffect(() => {
    const deviceUuid = localStorage.getItem('DEVICE_UUID');

    if (!deviceUuid) {
      try {
        localStorage.setItem('DEVICE_UUID', uuid());
      } catch (error) {
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Spinner />}>
          <LazyAppRouter />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
