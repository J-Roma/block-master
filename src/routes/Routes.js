import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import React, {useEffect, useState} from 'react'

import Login from '../componentes/Login'
import Mains from '../containers/Mains'
import Navbar from '../componentes/Navbar';
import TopRaiting from '../containers/TopRaiting';
import LowRaiting from '../containers/LowRaiting';
import Register from '../componentes/Register';


const Routes = () => {

    // const [cheking, setChecking] = useState(true);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    /*
    useEffect(() => {
        consultar a firebase
    })

    */

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Mains} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>

                <Route exact path="/top-raiting" component={TopRaiting}/>
                <Route exact path="/low-raiting" component={LowRaiting}/>

            </Switch>
        </Router>
    )
}

export default Routes
