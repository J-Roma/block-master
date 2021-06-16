import axios from "axios"
import Search from "../componentes/Search"

//import { useState } from "react"

export const readMovieApi = (movie) => {
    const searchingMovie = []

    axios.get(`http://api.themoviedb.org/3/search/movie?api_key=ed4ef444cf09035de37c391527885e55&language=es&query=${movie}`)
        .then(datos => {
            const total = datos.data.results
            total.forEach( hijo => {
                searchingMovie.push(hijo)
            }
                
            )
            console.log(searchingMovie)
        })
        .catch(
            e => console.log(e)
        )
    return (searchingMovie)
}
