import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardDiv = styled.button`
    position: relative;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`
const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 3%;
    //${props => props.star && 'color: white'}
    ${props => props.star && `
        top: 25%;
        left: 15%;
        font-size: 21px;
        color: #FED941;
    `};
    ${props => props.rating && `
        top: 28%;
        left: 45%;
        color: #fff;
    `};
`

const Img = styled.img`
    
`


const ListMovies = () => {
    return (
        <div className="container-md mt-5 mb-5">       
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Infamous</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                 <div class="modal-body">
                    ...
                  </div>
                 <div class="modal-footer">
                 <a class="btn btn-lg btn-warning" href="#">VER AHORA</a>
                 <a class="btn btn-lg btn-outline-warning bg-dark" href="#">VER DESPUES</a>

                 </div>
                </div>
              </div>
            </div>
            <CardDiv type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <Img src="https://i.imgur.com/3LHLCji.png"/>
                <Overlay>
                <Img src="https://i.imgur.com/GHZrOvx.png"/>
                    <Overlay star>
                        <FontAwesomeIcon icon={faStar} />                   
                    </Overlay>
                    <Overlay rating>
                        <h1 className="fs-4">5.0</h1>
                    </Overlay>
                </Overlay>
            </CardDiv>
            
        </div>
    )
}

export default ListMovies
