import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Icon = styled.div`
    color: #FED941;
`

const Navbar = () => {
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
                            <div class="input-group">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-warning" type="submit">Search</button>
                            </div>
                        </form>
                        <Link to="/login"><Icon><FontAwesomeIcon className="fs-2 ms-5" icon={faUserCircle} /></Icon></Link>
      
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
