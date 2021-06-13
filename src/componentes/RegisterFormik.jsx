import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../hooks/useForm'
import { useFormik } from 'formik';
import { setError, removeError } from '../actions/ui'
import { startRegisterWithEmailPasswordName } from '../actions/auth'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

const validate = values => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length > 15) {
		errors.name = 'El Nombre debe Tener 15 Caracteres o Menos';
	}

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length > 5) {
		errors.password = 'La contraseña debe Tener 5 caracteres o mas';
	} else if (values.password !== values.password2) {
		errors.password = 'Los Dos Campos deben ser Iguales'
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Correo invalido';
	}

	return errors;
};

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`

const RegisterFormik = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			name: '',
			password: '',
			password2: '',
			email: '',
		},
		validate,
		onSubmit: values => {
			values.preventDefault()
			dispatch(startRegisterWithEmailPasswordName(values.email, values.password, values.name))

		},
	})

	return (
		<Container>
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
					<form onSubmit={formik.handleChange}>
						<div className="mb-2 text-start">
							<label for="name" className="form-label">Nombre</label>
							<input
								name="name"
								type="text"
								className="form-control"
								id="name"
								aria-describedby="name"
								placeholder="David"
								value={formik.values.name}
								onChange={formik.handleChange}
							/>
						</div>
						{formik.errors.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}
						<div className="mb-2 text-start">
							<label for="exampleInputEmail1" className="form-label">E-Mail</label>
							<input
								name="email"
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="e-mail@gmail.com"
								value={formik.values.email}
								onChange={formik.handleChange}

							/>
							{formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}
							<div id="emailHelp" className="form-text text-center">Tu e-mail es sera de uso exclusivo y privado en BlockBuster.</div>
						</div>
						<div className="mb-2 text-start">
							<label for="exampleInputPassword1" className="form-label">Contraseña</label>
							<input
								name="passwordOne"
								type="password"
								className="form-control"
								value={formik.values.password}
								onChange={formik.handleChange}
							/>
							{formik.errors.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}

						</div>
						<div className="mb-2 text-start">
							<label for="exampleInputPassword1" className="form-label">Confirme Contraseña</label>
							<input
								name="passwordTwo"
								type="password"
								className="form-control"
								value={formik.values.password2}
								onChange={formik.handleChange}
							/>
							{formik.errors.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}
						</div>
						<div className="mb-2 form-check">
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

export default RegisterFormik
