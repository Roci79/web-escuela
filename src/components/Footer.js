import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid text-white mt-5 py-5 px-sm-3 px-md-5" style={{background:'#746249'}} >
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <Link to="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: '40px', lineHeight: '40px' }}>
          <img src={`${process.env.PUBLIC_URL}/img/trasno.png`} alt="Logo" style= {{width: '45px', height: '55px', marginBottom: '8px', marginRight: '8px'}}/>
            <span className="text-white">CEIP A Barqueira</span>
          </Link>
          <p style={{ textAlign: 'justify' }} >
          Descubre un colegio donde la educación es cercana y personalizada y los profesores comprometidos con el desarrollo integral de cada alumno. ¡Una experiencia educativa diferente!</p>
          <div className="d-flex justify-content-start mt-4">
            <Link to="/" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }}><i className="fab fa-twitter text-white"/></Link>
            <Link to="/" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }}><i className="fab fa-facebook-f text-white"/></Link>
            <Link to="/" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }}><i className="fab fa-linkedin-in text-white"/></Link>
            <Link to="/" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }}><i className="fab fa-instagram text-white"/></Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="mb-4" style={{color:'#d3ad76'}}>Contactar</h3>
          <div className="d-flex">
            <h4 className="fa fa-map-marker-alt" style={{color:'#d3ad76'}}> <span className="sr-only">Location</span></h4>
            <div className="pl-3">
              <h5 className="text-white">Dirección</h5>
              <p>Felgosas, s/n - A BARQUEIRA - 15569 - Cerdido (A Coruña)</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-envelope" style={{color:'#d3ad76'}}> <span className="sr-only">Email</span></h4>
            <div className="pl-3">
              <h5 className="text-white">Email</h5>
              <p>ceip.barqueira@edu.xunta.gal</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-phone-alt" style={{color:'#d3ad76'}}> <span className="sr-only">Phone</span></h4>
            <div className="pl-3">
              <h5 className="text-white">Teléfono</h5>
              <p>+34 881 93 01 03</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className=" mb-4" style={{color:'#d3ad76'}}>Enlaces</h3>
          <div className="d-flex flex-column justify-content-start">
            <Link to="/" className="text-footer mb-2" style={{textDecoration: "none"}}><i className="fa fa-angle-right mr-2"></i>Home</Link>
            <Link to="/About" className="text-footer mb-2" style={{textDecoration: "none"}}><i className="fa fa-angle-right mr-2"></i>Nosotros</Link>
            <Link to="/Class" className="text-footer mb-2" style={{textDecoration: "none"}}><i className="fa fa-angle-right mr-2"></i>Clases</Link>
            <Link to="/Team" className="text-footer mb-2" style={{textDecoration: "none"}}><i className="fa fa-angle-right mr-2"></i>Profesores</Link>
            <Link to="/Blog" className="text-footer mb-2" style={{textDecoration: "none"}}><i className="fa fa-angle-right mr-2"></i>Blog</Link>
            <Link to="/Contact" className="text-footer" style={{textDecoration: "none"}}><i className="fa fa-angle-right mr-2"></i>Contactos</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="mb-4" style={{color:'#d3ad76'}}>Revista Escolar</h3>
          <form action="">
            <div className="form-group">
              <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control border-0 py-4" placeholder="Your Email" required="required" />
            </div>
            <div>
              <button className="btn btn-primary btn-block border-0 py-3" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-fluid pt-5" style={{ borderTop: '1px solid white' }}>
        <p className="m-0 text-center text-white">
          &copy; <Link to="/" className=" font-weight-bold" style={{color:'#d3ad76'}}>CEIP Da Barqueira</Link>. All Rights Reserved. Designed by
          <Link to="/" className=" font-weight-bold" style={{color:'#d3ad76'}}> Rocío MF</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
