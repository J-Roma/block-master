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
    
`


const ListMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const list = useSelector(state => state.movies.movies)
    isLoading ? console.log('Estoy Cargando') : console.log(list[1].poster_path);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef444cf09035de37c391527885e55&language=es')
            .then(async (datos) => {
                await dispatch(load(datos.data.results))
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    return (

        <div className="container-md mt-5 mb-5">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title text-warning " id="exampleModalLabel">Infamous</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-3 text-white">
                                    Imagen
                        </div>
                                <div className="col-9 text-white">
                                    Datos Pelicula
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

            <div className="container">
                <div className="row">
            {isLoading ? <h1>Cargando.......</h1> 
            : 
            (list.map(datos => 
            (<div className="col-2 mb-5"><CardDiv type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" key={datos.id}>
                <Img src={`https://image.tmdb.org/t/p/w185${datos.poster_path}`} />
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
            } </div></div>



        </div>
    )
}

export default ListMovies
