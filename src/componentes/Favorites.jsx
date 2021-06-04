import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { startGoogleLogout } from '../actions/auth';
import { Link } from 'react-router-dom';

const AdminContainer = styled.div`

  border: #FED941 5px solid;
  border-radius: 15px;
`
const Favorites = () => {

	const dispatch = useDispatch();
	
	const handleLogout = () => {
		dispatch(startGoogleLogout());
	}

    return (
        <AdminContainer className="container-md bg-white mt-3 p-3">
          <div className="row">
            <div className="col-2">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/account" className="nav-link " aria-current="page">Cuenta</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/favorites" className="nav-link active">Favoritos</Link>
                </li>
                <li className="nav-item mb-2">
                  <button onClick={handleLogout} className="btn btn-danger" type="button">Cerrar Sesion</button>
                </li>
              </ul>
            </div>
            <div className="col-10">
              Favoritos
            </div>
          </div>
    
    
    
    
        </AdminContainer>
      )
}

export default Favorites
