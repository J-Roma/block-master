import { types } from '../types/Types'

const initialState = {
    movies: [],
    topMovies: [],
    lowMovies: [],
}

const movieReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.moviesLoad:
            return {
                ...state,
                movies: action.payload.movies,
            }
        case types.moviesTopLoad:
            return {
                ...state,
                topMovies: action.payload.topMovies,
            }
        case types.moviesLowLoad:
            return {
                ...state,
                lowMovies: action.payload.lowMovies,
            }


        default:
            return state;
    }
}

export default movieReducers
