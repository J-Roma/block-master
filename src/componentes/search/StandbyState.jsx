import React from 'react';
import styled from 'styled-components'


const Img = styled.img`
    max-width: 390px;
    height: 399px;
`
//http://api.themoviedb.org/3/search/movie?api_key=###&query={Rapidos y furiosos}
const StandbyState = () => {

	return (
		<div className="row column justify-content-center">
            <Img className="img-thum" src="https://res.cloudinary.com/romajs/image/upload/v1623812916/Stuck_at_Home_Searching_jkgbwt.png" alt="Searching" />
            <h1 className="text-white text-center fs-3"><strong>No se encontraron resultados para “{`props.movie`}”</strong></h1>
		</div>
	)
}

export default StandbyState
