import React from 'react'
import ListMovies from '../componentes/ListMovies'
import Slider from '../componentes/Slider';

const Mains = () => {

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        console.log("scrollTop: ", scrollTop);
       // console.log("clientHeight", clientHeight);
        //console.log("scrollHeight", scrollHeight);
    };     

    return (
        <div onScroll={handleScroll}>
            <Slider />            
            <ListMovies/>
        </div>
    )
}

export default Mains
