import React from 'react'

const Slider = () => {
    return (
        <div className="container-md">
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.imgur.com/3iZc07Z.png" class="d-block w-100" alt="..." />
                        <div class="container">
                            <div class="carousel-caption text-start">
                            <p><a class="btn btn-lg btn-warning" href="#">VER AHORA</a> <a class="btn btn-lg btn-outline-warning bg-dark" href="#">VER DESPUES</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.imgur.com/RGyjnLe.png" class="d-block w-100" alt="..." />
                        <div class="container">
                            <div class="carousel-caption text-start">
                            <p><a class="btn btn-lg btn-warning" href="#">VER AHORA</a> <a class="btn btn-lg btn-outline-warning bg-dark" href="#">VER DESPUES</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.imgur.com/dB8qZ8J.png" class="d-block w-100" alt="..." />

                        <div class="container">
                            <div class="carousel-caption text-start">
                                <p><a class="btn btn-lg btn-warning" href="#">VER AHORA</a> <a class="btn btn-lg btn-outline-warning bg-dark" href="#">VER DESPUES</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
