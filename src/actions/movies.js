import { types } from '../types/Types';
//import { firebase, googleAuthProvider } from "../firebase/config"
//import { useDispatch } from 'react-redux';


export const movies = (movies) => ({
    type: types.moviesLoad,
    payload: {
        movies
    }

})

export const load = (datos) => {    
    
    return (dispatch) => {
        dispatch(movies(datos))
    }
}