import { useState } from "react"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import { db } from "../firebase/config"

export const useVerify = (initialState = {}) => {
    const [state, setstate] = useState(initialState)
    const history = useHistory();

    const verify = (idef) => {
        db.collection('movieList')
            .onSnapshot(snap => {
                const dato = []
                snap.forEach(snapHijo => {
                    snapHijo.id && dato.push({
                        ...snapHijo.data()
                    })
                })
                const newDato = dato.find(el => el.idTMDB == idef);
                if(newDato){
                    setstate(newDato)
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: '¡Lo Sentimos!, Esta Pelicula esta en Mantenimiento',
                        icon: 'error',
                        confirmButtonText: 'Back'
                      })
                    history.push('/')
                }

            })

    }


    return [state, verify]

}
