import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { startGoogleLogout } from '../actions/auth';
import { Link } from 'react-router-dom';
import { db } from '../firebase/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { verdespues, deleteMovies } from '../actions/crud';


const AdminContainer = styled.div`
  background-image: url('https://res.cloudinary.com/romajs/image/upload/v1623621846/1773899_mobibo.jpg');
  border: #FED941 5px solid;
  border-radius: 15px;

`

const CardDiv = styled.div`
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
    ${props => props.delete && `
        font-size: 35px;
        top: 78%;
        left: 32%;
        margin: 0 auto;
        color: red;
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

const Favorites = () => {
  const uid = useSelector(state => state.auth.uid)

  const dispatch = useDispatch();
  const pintar = useSelector(state => state.crud.verdespues)

  const handleLogout = () => {
    dispatch(startGoogleLogout());
  }

  const handleDelete = (e) => {

    let idDb = e.target.id;
    dispatch(deleteMovies(idDb))

  }

  useEffect(() => {
    // Hago referencia a la coleccion, luego con snapshop trae el contenido,
    // y luego forEach al snap hjo para traer la data
    db.collection('users/JhosepRopero/verDespues')
      .onSnapshot(snap => {

        const verDespues = [];

        snap.forEach(snapHijo => {

          verDespues.push({
            idDb: snapHijo.id,
            ...snapHijo.data()
          })

        })

        dispatch(verdespues(verDespues))
      });
  }, [])
  return (
    <AdminContainer className="container-md bg-white mt-3 p-3">
      <div className="row">
        <div className="col-md-2">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/account" className="nav-link " aria-current="page">Cuenta</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/account/favorites" className="nav-link active">Favoritos</Link>
            </li>

            <li className="nav-item mb-2">
              <button onClick={handleLogout} className="btn btn-danger ms-3" type="button">Cerrar Sesion</button>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <h1 className="text-center text-warning fs-2 mt-3">Mi Lista</h1>

          <div className="d-flex flex-wrap justify-content-around mt-4 mb-5 bg-dark rounded p-2">
            {pintar.length < 1 ? <h1>Cargando.......</h1>
              :
              (pintar.map(datos =>
              (<div className="p-3" key={datos.id}><CardDiv >

                <Img className="rounded" id={datos.id} src={`https://image.tmdb.org/t/p/w185${datos.url}`} />
                <Overlay delete>
                  <button
                    id={datos.idDb}
                    className="btn btn-danger"
                    onClick={handleDelete}
                  >
                    Borrar
                  </button>
                </Overlay>
                <Overlay>
                  <Img src="https://i.imgur.com/GHZrOvx.png" />

                  <Overlay star>
                    <FontAwesomeIcon icon={faStar} />
                  </Overlay>
                  <Overlay rating>
                    <h1 className="fs-4">{datos.raiting}</h1>
                  </Overlay>
                </Overlay>
              </CardDiv>
              </div>)))
            }</div>

        </div>
      </div>




    </AdminContainer>
  )
}

export default Favorites
