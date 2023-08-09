import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-brand" href="">Navbar</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button className="nav-link active" aria-current="page" href="#">Accueil</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="#">Lien</button>
          </li>
          <li className="nav-item dropdown">
            <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu déroulant
            </p>
            <ul className="dropdown-menu">
            <li><button className="dropdown-item" href="#">Action</button></li>
            <li><button className="dropdown-item" href="#">Une autre action</button></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><button className="dropdown-item" href="#">Autre chose</button></li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-link disabled">Désactiver</button>
          </li>
          </ul>
          <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Recherche</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar