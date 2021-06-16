import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import StandbyState from './search/StandbyState';


const Search = () => {
    const {id} = useParams();
    

    return (
        <div>
            <StandbyState/>
        </div>
    )
}

export default Search
