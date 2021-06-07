import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleAuth, startLoginEmailPassword } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2'
import validator from 'validator';
import { removeError, setError } from '../actions/ui';


const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`

const Login = () => {

	const [formValues, handleInpuChange] = useForm({
		email: "",
		password: "",
	})
	const {email, password} = formValues;

	const dispatch = useDispatch();
	const { msjError } = useSelector(state => state.ui);
	

	const handleGoogleAuth = () => {
		//e.preventDefault();
		dispatch(startGoogleAuth());
	}
	
	const handleSubmit = (e) => {
		dispatch(startLoginEmailPassword(email, password))
	}

	return (
		<Container>
			
			<div className="card text-center mt-5">
				<div className="card-header">
					<ul className="nav nav-tabs card-header-tabs">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="true">Iniciar Sesion</Link>
						</li>
						<li className="nav-item">
							<Link to="/register" className="nav-link">Registrarse</Link>
						</li>
					</ul>
				</div>
				<div className="card-body">
					<form>
						<div className="mb-3 text-start">
							<label for="exampleInputEmail1" className="form-label" >E-Mail</label>
							<input
								type="email"
								name="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="e-mail@gmail.com"
								onChange={handleInpuChange}
								/>
							<div id="emailHelp" className="form-text text-center">Tu e-mail es sera de uso exclusivo y privado en BlockBuster.</div>
						</div>
						<div className="mb-1 text-start">
							<label for="exampleInputPassword1" className="form-label">Contraseña</label>
							<input
								type="password"
								name="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={handleInpuChange}
							/>
							<div id="passwordHelp" className="form-text text-center"></div>
							</div>
						<div className="form-check">
						</div>
						<div className="d-grid gap-2 col-6 mx-auto mb-3">
							<button className="btn btn-warning" type="button" onClick={handleGoogleAuth}><FontAwesomeIcon className="me-2" icon={faGoogle} />Iniciar Sesion con Google</button>
						</div>
						<div className="d-grid gap-2 col-6 mx-auto">
							<button className="btn btn-warning" type="button" onClick={handleSubmit}>Iniciar Sesion</button>
						</div>
					</form>
				</div>
			</div>

		</Container>
	)
}

export default Login
