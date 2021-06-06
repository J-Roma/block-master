import { types } from '../types/Types';
import { db } from "../firebase/config"
//import { useDispatch } from 'react-redux';


export const verdespues = (verdespues) => ({
    type: types.moviesAdd,
    payload: {
        verdespues
    }

})

export const addMovies = (datos, name ) => { 
    return async (dispatch,getSate) => {
        await dispatch(verdespues(datos))
        let add = getSate().crud.verdespues[0]
        db.collection(`users/${name.split(' ').join('')}/verDespues`)
                .add(add)
                
        //dispatch(verdespues(datos))
    }
}

export const deleteMovies = (idDb) => {    
   
    return async (dispatch, getSate) => {
        let name = getSate().auth.name.split(' ').join('')
        await db.collection(`users/${name}/verDespues`)
        .doc(`${idDb}`)
        .delete()
            .then(() => console.log('Borrado'))
            .catch(e => console.log(e))
    }
}
