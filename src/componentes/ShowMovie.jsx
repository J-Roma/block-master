import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useVerify } from '../hooks/useVerify'

const Video = styled.video`
    max-width: 100%;
    margin: 0 auto;
`
const H1 = styled.h1`
    color: #FED941;
    font-size: 35px;
    font-family: 'Roboto', sans-serif;`

const ShowMovie = () => {
    const [state, verify] = useVerify();
    const {id} = useParams();
    const x = id

    useEffect( () => {
        verify(x)
    }, [])
    useEffect(() => {
        state && console.log(state);
    }, [state])


    return (
        !state ? <H1>Cargado....</H1>:
        (<div className="container-md">
            <div className="row ">
                <div className="col-12">
                    <H1 className="mt-2 mb-4">{state.name}</H1>
                </div>
                <div className="col-12 text-center">
                    <Video
                        src={state.src}
                        controls>
                    </Video>
                </div>
                <div className="col-12">
                   <H1>Recomendadas</H1> 
                </div>
            </div>

        </div>)
    )
}

export default ShowMovie
