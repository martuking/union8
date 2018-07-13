import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BarraHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand"> Inicio </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gruas
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={"gruas"} className="nav-link"> Listado de gruas </Link>
                <Link to={"gruasCreate"} className="nav-link"> Nueva grua </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Personal
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={"personas"} className="nav-link"> Listado de personal </Link>
                <Link to={"personasCreate"} className="nav-link"> Nueva persona </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Actividades
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={"montajes"} className="nav-link"> Montajes </Link>
                <Link to={"pruebaLimitadores"} className="nav-link"> Pruebas de limitadores </Link>
                <Link to={"reportes"} className="nav-link"> Reportes </Link>
                <Link to={"revisiones"} className="nav-link"> Revisiones </Link>
                <Link to={"reparaciones"} className="nav-link"> Reparaciones </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Taller
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to={"adquisiciones"} className="nav-link"> Adquisiciones </Link>
              <Link to={"guiasDespacho"} className="nav-link"> Guias de despacho </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Clientes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to={"clientes"} className="nav-link"> Listado de clientes </Link>
                <div className="dropdown-divider"></div>
                <Link to={"clientesCreate"} className="nav-link"> Nuevo cliente </Link>
                <Link to={"ofertas"} className="nav-link"> Ofertas </Link>
                <Link to={"contratos"} className="nav-link"> Contratos </Link>
                <Link to={"ordenesCompra"} className="nav-link"> Ordenes de compra </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default BarraHome;
