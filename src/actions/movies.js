import { types } from '../types/Types';
import { firebase, googleAuthProvider } from "../firebase/config"
import { useDispatch } from 'react-redux';

export const moviesAction = (movies) => {
    return (dispatch, getState) => {
        const state = getState()
        console.log(state);
    }
}