import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { startGoogleAuth } from '../actions/auth';


const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`

const Login = () => {

	const dispatch = useDispatch();
	
	const handleGoogleAuth = () => {
		//e.preventDefault();
		console.log(startGoogleAuth);
		dispatch(startGoogleAuth);
	}

	return (
		<Container>
			<div className="card text-center mt-5">
				<div className="card-header">
					<ul className="nav nav-tabs card-header-tabs">
						<li className="nav-item">
							<div className="nav-link active" aria-current="true">Iniciar Sesion</div>
						</li>
						<li className="nav-item">
							<Link to="/register" className="nav-link" href="#">Registrarse</Link>
						</li>
					</ul>
				</div>
				<div className="card-body">
					<form>
						<div className="mb-3 text-start">
							<label for="exampleInputEmail1" className="form-label" >E-Mail</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e-mail@gmail.com" />
							<div id="emailHelp" className="form-text text-center">Tu e-mail es sera de uso exclusivo y privado en BlockBuster.</div>
						</div>
						<div className="mb-1 text-start">
							<label for="exampleInputPassword1" className="form-label">Contraseña</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
							<div id="passwordHelp" className="form-text text-center"></div>
							</div>
						<div className="form-check">
						</div>
						<div className="d-grid gap-2 col-6 mx-auto mb-3">
							<button className="btn btn-warning" type="button" onClick={handleGoogleAuth}><FontAwesomeIcon className="me-2" icon={faGoogle} />Iniciar Sesion con Google</button>
						</div>
						<div className="d-grid gap-2 col-6 mx-auto">
							<button className="btn btn-warning" type="submit">Iniciar Sesion</button>
						</div>
					</form>
				</div>
			</div>
		</Container>
	)
}

export default Login
