import React from 'react'
import { Link } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`

const Register = () => {
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
					<form>
						<div className="mb-2 text-start">
							<label for="name" className="form-label">Nombre</label>
							<input type="text" className="form-control" id="name" aria-describedby="name" placeholder="David" />
						</div>
						<div className="mb-2 text-start">
							<label for="lastname" className="form-label">Apellido</label>
							<input type="text" className="form-control" id="lastname" aria-describedby="lastname" placeholder="Caceres" />
						</div>
						<div className="mb-2 text-start">
							<label for="exampleInputEmail1" className="form-label">E-Mail</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e-mail@gmail.com"/>
							<div id="emailHelp" className="form-text text-center">Tu e-mail es sera de uso exclusivo y privado en BlockBuster.</div>
						</div>
						<div className="mb-2 text-start">
							<label for="exampleInputPassword1" className="form-label">Contraseña</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
							<div id="passwordHelp" className="form-text text-center"></div>

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

export default Register
