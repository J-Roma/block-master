import { types } from '../types/Types';
import { firebase, googleAuthProvider } from "../firebase/config"
//import { useDispatch } from 'react-redux';


export const movies = (movies) => ({
    type: types.moviesAdd,
    payload: {
        verdespues
    }

})

export const addMovies = (datos) => {    
    
    return (dispatch) => {
        dispatch(verdespues(datos))
    }
}

export const deleteMovies = (datos) => {    
    
    return (dispatch) => {
        dispatch(verdespues(datos))
    }
}
