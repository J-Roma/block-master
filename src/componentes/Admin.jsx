import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogout } from '../actions/auth';
import { Link } from 'react-router-dom';

const AdminContainer = styled.div`
  background-image: url('https://res.cloudinary.com/romajs/image/upload/v1623621846/1773899_mobibo.jpg');
  border: #FED941 5px solid;
  border-radius: 15px;
  height: 70vh;
`
const Profile = styled.div`
  margin: 0 auto;
`

const Img = styled.img`
  width: 150px;
  height: 150px;
`

const Admin = () => {
  const uid = useSelector(state => state.auth.uid)

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
              <Link to="/account/favorites" className="nav-link">Favoritos</Link>
            </li>
            {
            uid === 'EPYaaSs52oSNbuEIIYvpf3THi5T2' && (
            <li className="nav-item mb-2">
              <Link to="/account/controlpanel" className="nav-link">Panel de Control</Link>
            </li>
            )
            }
            <li className="nav-item mb-2">
                <button onClick={handleLogout} className="btn btn-danger ms-3" type="button">Cerrar Sesion</button>
            </li>
          </ul>
        </div>
        <div className="col-10 ">
            <div className="row">
              <Profile className="col-12">
                <Img className="rounded rounded-circle " src="https://www.seekpng.com/png/small/3-39236_anime-boy-png-transparent-picture-anime-boy-png.png" alt="afx" />
              </Profile>
              <div className="col-12 text-start">
                <h1>Hola</h1>
              </div>
            </div>
        </div>
      </div>




    </AdminContainer>
  )
}

export default Admin
