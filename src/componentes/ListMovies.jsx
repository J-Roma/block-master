import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from "react-redux";
import { load } from "../actions/movies";
import axios from "axios"

const CardDiv = styled.button`
    position: relative;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`
const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 3%;

    ${props => props.star && `
        top: 25%;
        left: 15%;
        font-size: 21px;
        color: #FED941;
    `};
    ${props => props.rating && `
        top: 28%;
        left: 45%;
        color: #fff;
    `};
`

const Img = styled.img`
    @media (max-width: 768px) {
        width: 140px;
    }
    @media (max-width: 576px) {
        width: 120px;
    }
    @media (max-width: 330px) {
        width: 90px;
    }
`


const ListMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const list = useSelector(state => state.movies.movies)

    const [targetId, setTargetId] = useState('')

    const handleClick = (e) =>{
        console.log(e.target.id);
        let content = list.find( dato => dato.id == e.target.id)
        setTargetId(content)
        // setTargetId(e.target.id)
        // console.log(list.find(dato => dato.id == e.target.id).overview)
        // console.log(list.find(dato => dato.id == targetId).poster_path);
    }

    useEffect(() => {
        axios.all([
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ed4ef444cf09035de37c391527885e55&page=1&language=es'),
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ed4ef444cf09035de37c391527885e55&page=2&language=es'),
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ed4ef444cf09035de37c391527885e55&page=3&language=es')

        ])
            .then( axios.spread (async (datosUno, datosDos, datosTres) => {
                await dispatch(load([...datosUno.data.results, ...datosDos.data.results, ...datosTres.data.results]))
                setIsLoading(false)
            }))
            .catch((e) => {
                console.log(e);
            })

        // axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef444cf09035de37c391527885e55&language=es')
        //     .then(async (datos) => {
        //         await dispatch(load(datos.data.results))
        //         setIsLoading(false)
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     })
    }, [])

    if (isLoading) {
        return <h1>Cargando......</h1>
    }
    
    return (
        
        <div className="container">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title text-warning " id="exampleModalLabel">Infamous</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-2">
                                <div className="col-md-3 text-white text-center">
                                    {targetId != '' && <img src={`https://image.tmdb.org/t/p/w185${targetId.poster_path}`}/>}
                                </div>
                                <div className="col-md-9 text-white">
                                    Datos Pelicula
                                    {targetId != '' && targetId.overview}
                        </div>
                            </div>
                        </div>
                        <div className="modal-footer border-top-0">
                            <button className="btn btn-lg btn-warning" >VER AHORA</button>
                            <button className="btn btn-lg btn-outline-warning bg-dark" >VER DESPUES</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="d-flex flex-wrap justify-content-around mt-5 mb-5">
            {isLoading ? <h1>Cargando.......</h1> 
            : 
            (list.map(datos => 
            (<div className="p-3"><CardDiv type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" key={datos.id}>
                <Img id={datos.id} onClick={handleClick} src={`https://image.tmdb.org/t/p/w185${datos.poster_path}`} />
                <Overlay>
                    <Img src="https://i.imgur.com/GHZrOvx.png" />
                    <Overlay star>
                        <FontAwesomeIcon icon={faStar} />
                    </Overlay>
                    <Overlay rating>
                        <h1 className="fs-4">{datos.vote_average}</h1>
                    </Overlay>
                </Overlay>
            </CardDiv></div>)))
            }</div>



        </div>
    )
}

export default ListMovies
