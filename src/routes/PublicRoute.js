import React from "react";
import Prototype from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoute.prototype = {
    isLoggedIn: Prototype.bool.isRequired,
    component: Prototype.func.isRequired,
};

export default PublicRoute;