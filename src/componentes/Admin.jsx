import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { startGoogleLogout } from '../actions/auth';
import { Link } from 'react-router-dom';

const AdminContainer = styled.div`

  border: #FED941 5px solid;
  border-radius: 15px;
`
const Admin = () => {

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
              <Link to="/account" className="nav-link active" aria-current="page">Cuenta</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/favorites" className="nav-link">Favoritos</Link>
            </li>
            <li className="nav-item mb-2">
                <button onClick={handleLogout} className="btn btn-danger" type="button">Cerrar Sesion</button>
            </li>
          </ul>
        </div>
        <div className="col-10">
          Hola mundo
        </div>
      </div>




    </AdminContainer>
  )
}

export default Admin
