import React from 'react';
import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../common/api/authentication';

const PrivateRoute = ({ component: Component, ...moreProps }) => (
  <Route
    {...moreProps}
    render={props =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
