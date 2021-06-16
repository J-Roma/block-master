import axios from "axios"

//import { useState } from "react"

const readMovieApi = () => {
    //const [movieList, setMovieList] = useState(null)
    //const dispatch = useDispatch()
    // axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef444cf09035de37c391527885e55&language=es')
    //     .then((datos) => {
    //         console.log(datos);
    //         dispatch(moviesAction(datos))//setMovieList(datos)
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
}

export default readMovieApi

export const readMovieApi = (movie) => {
    const searchingMovie = []

    axios.get(`http://api.themoviedb.org/3/search/movie?api_key=ed4ef444cf09035de37c391527885e55&language=es&query=${movie}`)
        .then(datos => {
            searchingMovie.push(...dato)
            console.log(searchingMovie)
        })
    return (alert('Ok'))
}
