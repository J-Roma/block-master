import {types} from '../types/Types'

const initialState = {
    verdespues: [],
}

const verDespuesReducers = (state = initialState, action) => {
    
    switch (action.type) {
        case types.moviesAdd:
            return {
                verdespues: action.payload.verdespues,
            }
            case types.moviesDelete:
                return {
                    // Cambiar Despues Para Eliminar
                    verdespues: action.payload.verdespues,
                }
            
        default:
            return state;
    }
}

export default verDespuesReducers
