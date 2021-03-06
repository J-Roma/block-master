import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import {authReducer} from "../reducers/authReducers"
import {registro} from '../reducers/uiReducers';
import movieReducers from '../reducers/movieReducers';
import verDespuesReducers from '../reducers/verDespuesReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: registro,
    movies: movieReducers,
    crud: verDespuesReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    

)
