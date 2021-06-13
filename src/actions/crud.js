import { types } from '../types/Types';
import { db } from "../firebase/config"
import Swal from 'sweetalert2';
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

export const uploadedMoviesList = (movie) => {
    return async (dispatch) => {
        db.collection(`movieList`)
        .add(movie)
            .then(res => {
                Swal.fire({
                    title: 'Exito!',
                    text: 'Has Subido la Pelicula Con exito',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(e => console.log(e))
    }      
    
}

// export const verify = (id) => {
//     if (id) {
//         const dato = []
//         db.collection('movieList')
//         .onSnapshot( snap => {
            
//             snap.forEach(snapHijo => {
//                 snapHijo.id && dato.push({
//                     ...snapHijo.data()
//                 })
//             })
            
//         })
//         dato = dato.find(el => el.idTMDB == '632357');
//     }
//     return (dato) 
// }
