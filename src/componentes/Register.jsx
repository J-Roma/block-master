import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../hooks/useForm'
import { setError, removeError } from '../actions/ui'
import { startRegisterWithEmailPasswordName } from '../actions/auth'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`

const Register = () => {

	const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        passwordOne: '',
        passwordTwo: ''
    })

	const { name, email, passwordOne, passwordTwo } = formValues

	const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.ui);
    console.log(msjError)	

	const formValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('nombre requerido'))
            return false
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError('Emial requerido'))
            return false
        }
        else if (passwordOne !== passwordTwo || passwordOne < 5) {
            dispatch(setError('La contraseña es incorecta'))
            return false
        }

        dispatch(removeError(''))
        return true
    }

	const handleSubmit = (e) => {

		e.preventDefault();
        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, passwordOne, name))
        }

	}

	return (
		<Container>
			{
				msjError && (
					Swal.fire({
					title: 'Error!',
					text: msjError,
					icon: 'error',
					confirmButtonText: 'Cool'
				  }),
				  dispatch(setError(null)),
				  <Redirect to="/register" />
				  )
			}
			<div className="card text-center mt-5">
				<div className="card-header">
					<ul className="nav nav-tabs card-header-tabs">
						<li className="nav-item">
							<Link to="login" className="nav-link" aria-current="true" >Iniciar Sesion</Link>
						</li>
						<li className="nav-item">
							<div className="nav-link active" >Registrarse</div>
						</li>
					</ul>
				</div>
				<div className="card-body">
					<form>
						<div className="mb-2 text-start">
							<label for="name" className="form-label">Nombre</label>
							<input
								name="name"
								type="text"
								className="form-control"
								id="name"
								aria-describedby="name"
								placeholder="David"
								onChange={handleInputChange}
							/>
						</div>
						<div className="mb-2 text-start">
							<label for="exampleInputEmail1" className="form-label">E-Mail</label>
							<input
								name="email"
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="e-mail@gmail.com"
								onChange={handleInputChange}

							/>
							<div id="emailHelp" className="form-text text-center">Tu e-mail es sera de uso exclusivo y privado en BlockBuster.</div>
						</div>
						<div className="mb-2 text-start">
							<label for="exampleInputPassword1" className="form-label">Contraseña</label>
							<input
								name="passwordOne"
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={handleInputChange}							
							/>
							<div id="passwordHelp" className="form-text text-center"></div>

						</div>
						<div className="mb-2 text-start">
							<label for="exampleInputPassword1" className="form-label">Confirme Contraseña</label>
							<input
								name="passwordTwo"
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={handleInputChange}							
							/>
							<div id="passwordHelp" className="form-text text-center"></div>

						</div>
						<div className="mb-2 form-check">
						</div>
						<div className="d-grid gap-2 col-6 mx-auto">
							<button onClick={handleSubmit} className="btn btn-warning" type="submit">Iniciar Sesion</button>
						</div>
					</form>
				</div>
			</div>
		</Container>
	)
}

export default Register
