import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import axios from "axios"
// import { useDispatch } from "react-redux";
// import { load } from "../actions/movies";
// import { useEffect } from "react";

const Icon = styled.div`
    color: #FED941;
`

const Navbar = ({isLoggedIn}) => {

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ed4ef444cf09035de37c391527885e55&language=es')
    //         .then((datos) => {
    //             console.log(datos);
    //             dispatch(load(datos.data.results))
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         })
    // }, [])

    return (
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand fs-3"><img src="https://i.imgur.com/gw0bEG7.png" alt="LOGO" /></Link>

                    <div className="collapse navbar-collapse fs-5 ms-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Todas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/top-raiting" className="nav-link">
                                    Mas Valoradas
                                </Link>
                            </li>
                            <li  className="nav-item">
                                <Link to="/low-raiting" className="nav-link">
                                    Menos Valoradas
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex ms-5">
                            <div className="input-group">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-warning" type="submit">Search</button>
                            </div>
                        </form>
                        {
                            isLoggedIn ? <Link to="/account"><Icon><FontAwesomeIcon className="fs-2 ms-5" icon={faUserCircle} /></Icon></Link>
                            : <Link to="/login"><Icon><FontAwesomeIcon className="fs-2 ms-5" icon={faUserCircle} /></Icon></Link>
                        }      
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
