import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from "react-redux";
import { loadTopMovies } from "../actions/movies";
import { addMovies } from "../actions/crud"
import axios from "axios"

import { Link } from 'react-router-dom';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    Text,
    Grid,
    GridItem
} from "@chakra-ui/react"

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


const TopMovies = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    //URL Ordenar por Mayor popularidad https://api.themoviedb.org/3/discover/movie?api_key=71168d3dc8fba2791d849d19ba33aeb5&sort_by=popularity.desc&page=1https://api.themoviedb.org/3/discover/movie?api_key=71168d3dc8fba2791d849d19ba33aeb5&sort_by=popularity.desc&page=1
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [targetId, setTargetId] = useState('');
    const list = useSelector(state => state.movies.topMovies);
    const [pagina, setPagina] = useState(1)
    //const [final, setFinal] = useState(false);
    const displayname = useSelector(state => state.auth.name);
    //Se declara el observador con useRef, y se dice que apenas sea visible active la accion (threshold: 1)
    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
            loader.current();
        }
    }, { threshold: 1 }));
    const [element, setElement] = useState(null)


    const handleClick = () => {
        let datos = [{
            "id": targetId.id,
            "url": `https://image.tmdb.org/t/p/w185${targetId.poster_path}`,
            "title": targetId.title,
            "raiting": targetId.vote_average
        }]
        dispatch(addMovies(datos, displayname))
    }


    const handleInfo = (e) => {
        let content = list.find(dato => dato.id == e.target.id)
        setTargetId(content)
    }

    const loadMoreMovies = () => {
        setPagina(pagina + 1)
        console.log(pagina);
    }
    const loader = useRef(loadMoreMovies)

    useEffect(() => {
        loader.current = loadMoreMovies;
    }, [loadMoreMovies]);

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {

            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        }
    }, [element])

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=71168d3dc8fba2791d849d19ba33aeb5&sort_by=popularity.desc&page=${pagina}&language=es`)
            .then(async (datos) => {
                await dispatch(loadTopMovies([...list, ...datos.data.results]))
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [pagina])

    return (
        <div className="container" >
             <Modal isOpen={isOpen} onClose={onClose} size="5xl">
                <ModalOverlay />
                <ModalContent bg="trasparent" >
                    <ModalHeader>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Grid
                            h="200px"
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={4}
                        >
                            <GridItem rowSpan={4} colSpan={1} >
                                <Image boxSize="280px" src={`https://image.tmdb.org/t/p/w185${targetId.poster_path}`} />
                            </GridItem>
                            <GridItem colSpan={4}>
                                {targetId !== '' && <Text fontSize="2xl" textAling="center" mb={5} color="yellow" ><strong>{targetId !== '' && targetId.title}</strong></Text>}
                                {targetId !== '' && <Text fontSize="xl" color="white" ><strong>{targetId.overview}</strong></Text>}
                            </GridItem>
                        </Grid>
                    </ModalBody>
                    <ModalFooter mt={10} >

                        <Link to={`/movie/${targetId.id}`}><button className="btn btn-lg btn-warning" onClick={onClose}>VER AHORA</button></Link>
                        <button onClick={handleClick} className="btn btn-lg btn-outline-warning bg-dark ms-3" >VER DESPUES</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


            <div className="d-flex flex-wrap justify-content-around mt-5 mb-5">
                {isLoading ? <h1>Cargando.......</h1>
                    :
                    (list.map(datos =>
                    (<div className="p-3" key={datos.idDb}><CardDiv type="button" onClick={onOpen} >
                        <Img id={datos.id} onClick={handleInfo} src={`https://image.tmdb.org/t/p/w185${datos.poster_path}`} />
                        <Overlay>
                            <Img src="https://i.imgur.com/GHZrOvx.png" />
                            <Overlay star>
                                <FontAwesomeIcon icon={faStar} />
                            </Overlay>
                            <Overlay rating>
                                <h1 className="fs-4">{datos.vote_average}</h1>
                            </Overlay>
                        </Overlay>
                    </CardDiv></div>)))
                }</div>


            <div className="row">
                <div className="col-12 text-center">
                    <div ref={setElement} class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TopMovies
