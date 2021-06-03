import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const Icon = styled.div`
//     color: #FED941;
//     font-size: 15px;
// `

const Slider = () => {
    return (
        <div className="container-md">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.imgur.com/3iZc07Z.png" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption text-start">
                            <p><Link to="/" className="btn btn-lg btn-warning me-2" href="#"><FontAwesomeIcon className="me-2" icon={faPlay} />VER AHORA</Link>
                             <Link to="/" className="btn btn-lg btn-outline-warning bg-dark" href="#"><FontAwesomeIcon className="me-2" icon={faPlus} />VER DESPUES</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/RGyjnLe.png" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption text-start">
                            <p><Link to="/" className="btn btn-lg btn-warning me-2" href="#"><FontAwesomeIcon className="me-2" icon={faPlay} /> VER AHORA</Link>
                             <Link to="/" className="btn btn-lg btn-outline-warning bg-dark" href="#"><FontAwesomeIcon className="me-2" icon={faPlus} />VER DESPUES</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/dB8qZ8J.png" className="d-block w-100" alt="..." />

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <p><Link to="/" className="btn btn-lg btn-warning me-2" href="#"><FontAwesomeIcon className="me-2" icon={faPlay} /> VER AHORA</Link>
                                 <Link to="/" className="btn btn-lg btn-outline-warning bg-dark" href="#"><FontAwesomeIcon className="me-2" icon={faPlay} />VER DESPUES</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
