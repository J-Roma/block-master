import React from 'react'

const Navbar = () => {
    return (
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3">LOGO</a>

                    <div className="collapse navbar-collapse fs-5 ms-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">Todas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Mas Valoradas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Menos Valoradas</a>
                            </li>
                        </ul>
                        <form className="d-flex ms-5">
                            <div class="input-group">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-warning" type="submit">Search</button>
                            </div>
                        </form>
      
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
