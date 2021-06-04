import { Route, Redirect } from 'react-router-dom'
import Prototype from "prop-types";

export const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            component={(props) =>
                isLoggedIn ? (
                <Component {...props} />
                ) : (
                    <Redirect to="/login" />    
                )
            }
        />
    )
}

PrivateRoute.prototype = {
    isLoggedIn: Prototype.bool.isRequired,
    component: Prototype.func.isRequired,
};
