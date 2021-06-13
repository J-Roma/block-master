import { useState } from "react"
import { db } from "../firebase/config"

export const useVerify = (initialState = {}) => {
    const [state, setstate] = useState(initialState)

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
                newDato ? setstate(newDato) : console.log('No esta la Peli');
            })

    }


    return [state, verify]

}
