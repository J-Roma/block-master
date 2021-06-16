import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import StandbyState from './search/StandbyState';

const Container = styled.div`

`


const Search = () => {


    return (
        <div>
            <StandbyState/>
        </div>
    )
}

export default Search
