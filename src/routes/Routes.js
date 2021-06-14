import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Mains from '../containers/Mains'
import LowRaiting from '../containers/LowRaiting';
import TopRaiting from '../containers/TopRaiting';
import Login from '../componentes/Login'
import Navbar from '../componentes/Navbar';
import Register from '../componentes/Register';
import Admin from '../componentes/Admin'
import { PrivateRoute } from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Favorites from '../componentes/Favorites';
import ControlPanel from '../componentes/ControlPanel';
import ShowMovie from '../componentes/ShowMovie';

const Routes = () => {
    const [cheking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        });
    }, [dispatch, cheking, isLoggedIn])

    if (cheking) {
        return <h3>Cargando....</h3>
    }

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} />
            <Switch>
                <Route exact path="/" component={Mains} />
                <Route exact path="/top-raiting" component={TopRaiting} />
                <Route exact path="/low-raiting" component={LowRaiting} />

                <PublicRoute
                    exact
                    path="/login"
                    component={Login}
                    isLoggedIn={isLoggedIn}
                />

                <PublicRoute
                    exact
                    path="/register"
                    component={Register}
                    isLoggedIn={isLoggedIn}
                />

                <PrivateRoute
                    exact
                    path="/account"
                    isLoggedIn={isLoggedIn}
                    component={Admin}
                />

                <PrivateRoute
                    exact
                    path="/account/favorites"
                    isLoggedIn={isLoggedIn}
                    component={Favorites}
                />

                <PrivateRoute
                    exact
                    path="/account/controlpanel"
                    isLoggedIn={isLoggedIn}
                    component={ControlPanel}
                />

                <PrivateRoute
                    exact
                    path="/movie/:id"
                    isLoggedIn={isLoggedIn}
                    component={ShowMovie}
                />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default Routes
