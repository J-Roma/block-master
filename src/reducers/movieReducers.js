import {types} from '../types/Types'

const initialState = {
    movies: [],
    active: null,
}

const movieReducers = (state = initialState, action) => {
    
    switch (action.type) {
        case types.moviesLoad:
            return {
                movies: action.payload.movies,
                active: action.payload.active
            }
    
        default:
            return state;
    }
}

export default movieReducers
