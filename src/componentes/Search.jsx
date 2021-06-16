import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import StandbyState from './search/StandbyState';
import { readMovieApi } from '../helpers/readMovieApi';
import CardMovies from './search/CardMovies';


const Search = () => {
    const { id } = useParams();
    const movie = readMovieApi(id                                                                                                                                                                                       );
    

    return (
        <div>
            <CardMovies list={movie} />                                                                                                                              
 {/*            {
                state == 1 ? (
                    <StandbyState />
                )
                :
                (
                    <CardMovies list={state} />
                )
                
            } */}
        </div>
    )
}

export default Search
