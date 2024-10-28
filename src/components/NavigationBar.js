// src/components/Navigation_Bar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="container-fluid bg-light position-relative shadow">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link to="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
        <img src={`${process.env.PUBLIC_URL}/img/trasno.png`} alt="Logo" style= {{width: '45px', height: '55px', marginBottom: '8px'}}/>
          <span style={{color: '#940215' }}> CEIP A Barqueira</span>
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to="/" className="nav-item nav-link" >Home</Link>
            <Link to="/About" className="nav-item nav-link">Nosotros</Link>
            <Link to="/Class" className="nav-link">Clases</Link>
            <Link to="/Team" className="nav-item nav-link">Profes</Link>
            <Link to="/Gallery" className="nav-item nav-link">Galeria</Link>
            <Link to="/Blog" className="nav-link">Blog</Link>
            <Link to="/Contact" className="nav-link">Contactar</Link>
          </div>
          {/* <Link to="/Contact" className="btn btn-primary px-4" >Join Class</Link> */}
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;

