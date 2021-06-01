import React from 'react'
import ListMovies from '../componentes/ListMovies'
import Navbar from '../componentes/Navbar'
import Slider from '../componentes/Slider'

const Mains = () => {
    return (
        <div >
            <Navbar/>
            <Slider/>
            <ListMovies/>
        </div>
    )
}

export default Mains
