import { types } from '../types/Types';
//import { firebase, googleAuthProvider } from "../firebase/config"
//import { useDispatch } from 'react-redux';


export const movies = (movies) => ({
    type: types.moviesLoad,
    payload: {
        movies
    }
    
})

export const topMovies = (topMovies) => ({
    type: types.moviesTopLoad,
    payload: {
        topMovies,
    } 
})

export const lowMovies = (lowMovies) => ({
    type: types.moviesLowLoad,
    payload: {
        lowMovies,
    }
    
})


export const load = (datos) => {    
    
    return (dispatch) => {
        dispatch(movies(datos))
    }
}

export const loadTopMovies = (datos) => {    
    
    return (dispatch) => {
        dispatch(topMovies(datos))
    }
}

export const loadLowMovies = (datos) => {    
    
    return (dispatch) => {
        dispatch(lowMovies(datos))
    }
}