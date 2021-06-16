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
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../actions/crud"
import axios from "axios"
import { Link } from 'react-router-dom';

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
    @media (max-width: 768px) {
        width: 140px;
    }
    @media (max-width: 576px) {
        width: 120px;
    }
    @media (max-width: 330px) {
        width: 90px;
    }
`
const CardMovies = (props) => {

    const [container, setContainer] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = useState(true);
    const [targetId, setTargetId] = useState('');
    //const displayname = useSelector(state => state.auth.name);
    
/*     const dispatch = useDispatch();
    const handleClick = () => {
        let datos = [{
            "id": targetId.id,
            "url": `https://image.tmdb.org/t/p/w185${targetId.poster_path}`,
            "title": targetId.title,
            "raiting": targetId.vote_average
        }]
        dispatch(addMovies(datos, displayname))
    }
 */

    const handleInfo = (e) => {
        let content = container.find(dato => dato.id == e.target.id)
        setTargetId(content)
    }

    useEffect(async () => {
        await setContainer(props.list)
        setIsLoading(false)
    }, [props.list])




    return (
        <div className="container">
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
                        <button className="btn btn-lg btn-outline-warning bg-dark ms-3" >VER DESPUES</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <div className="d-flex flex-wrap justify-content-around mt-5 mb-5">
                {isLoading ? <h1>Cargando.......</h1>
                    :
                    (container.map(datos =>
                    (<div className="p-3" key={datos.id}><CardDiv type="button" onClick={onOpen} >
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

        </div>
    )
}

export default CardMovies
