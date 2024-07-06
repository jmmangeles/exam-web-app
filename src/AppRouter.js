/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { getUserDetailsRequest } from './reducers/auth/AuthAction';
import LoginPage from './Auth/Login/Login';
import HomePage from './Home/HomePage';
import RegisterPage from './Auth/Register/Register';

const AppRouter = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ Auth }) => !!Auth.accessToken);
  console.log('isLoggedInValue', isLoggedIn);

  useEffect(() => {}, []);

  useEffect(() => {
    const onMount = async () => {

      if (isLoggedIn) {
        try {
          await dispatch(getUserDetailsRequest()).$promise;
        } catch (error) {
          //
        }
      }
    };

    onMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-100">
      <BrowserRouter>
        <Switch>
          <Route
            path="/auth/register"
            render={props => (<RegisterPage {...props} />)}
          />
          <Route
            path="/auth"
            render={props => (!isLoggedIn ? <LoginPage {...props} /> : <Redirect to="/home" />)}
          />
          <Route
            path="/home"
            render={props => (isLoggedIn ? (<HomePage {...props} />) : (<Redirect to="/auth" />))}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
