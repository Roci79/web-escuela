import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const newErrors = {};
      if (!name) newErrors.name = 'Por favor, ingresa tu nombre.';
      if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        newErrors.email = 'Por favor, ingresa un correo válido.';
      }
      if (!subject) newErrors.subject = 'Por favor, ingresa un tema.';
      if (!message) newErrors.message = 'Por favor, escribe tu mensaje.';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log("Formulario enviado correctamente");
        // Aquí puedes manejar el envío del formulario
      }
    };
  
  return (
    <div>
      <div id="top" className="container-fluid mb-5"  style={{background: '#EFE4D7' }}>
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
            <h3 className="display-3 font-weight-bold" style={{color:'#563d26'}}>Contáctanos</h3>
            <div className="d-inline-flex" style={{color:'#563d26'}}>
                <p className="m-0"><Link to="/" style={{color:'#563d26', textDecoration: "none", fontWeight: 'bold'}}>Home</Link></p>
                <p className="m-0 px-2">/</p>
                <p className="m-0" style={{color:'#563d26', fontWeight: 'bold'}}>Contactar</p>
            </div>
        </div>
    </div>
 


  
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Ponerse en contacto.</span></p>
                <h1 className="mb-4" style={{color:"#940013"}}>No te quedes con dudas, contáctanos.</h1>
            </div>
            <div className="row">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form onSubmit={handleSubmit} noValidate name="sentMessage" id="contactForm">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Nombre" required="required"  value={name} onChange={(e) => setName(e.target.value)} />
                                {errors.name && <p className="help-block text-danger">{errors.name}</p>}
                            </div>
                            <br/>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Email" required="required" value={email}onChange={(e) => setEmail(e.target.value)}/>
                                {errors.email && <p className="help-block text-danger">{errors.email}</p>}
                            </div>
                            <br/>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Tema" required="required" value={subject}onChange={(e) => setSubject(e.target.value)}/>
                                {errors.subject && <p className="help-block text-danger">{errors.subject}</p>}
                            </div><br/>
                            <div className="control-group">
                                <textarea className="form-control" rows="6" id="message" placeholder="Mensaje" required="required" value={message}onChange={(e) => setMessage(e.target.value)}/>
                                {errors.message && <p className="help-block text-danger">{errors.message}</p>}
                            </div><br/>

                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <p>¿Quieres saber más sobre nuestra escuela? Ponte en contacto con nosotros y estaremos encantados de responder tus preguntas. ¡No te quedes con dudas, estamos aquí para ayudarte!</p>
                    <div className="d-flex">
                        <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center rounded-circle" style={{width: '45px', height: '45px', background: '#d3ad76', color: 'white'}}></i>
                        <div className="pl-3">
                            <h5 style={{color:'#563d26'}}>Dirección</h5>
                            <p>Felgosas, s/n - A BARQUEIRA - 15569 - Cerdido (A Coruña)</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center rounded-circle" style={{width: '45px', height: '45px', background: '#d3ad76', color: 'white' }}></i>
                        <div className="pl-3">
                            <h5 style={{color:'#563d26'}}>Email</h5>
                            <p>ceip.barqueira@edu.xunta.gal</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center rounded-circle" style={{width: '45px', height: '45px', background: '#d3ad76', color: 'white'}}></i>
                        <div className="pl-3">
                            <h5 style={{color:'#563d26'}}>Phone</h5>
                            <p>+34 881 93 01 03</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="far fa-clock d-inline-flex align-items-center justify-content-center rounded-circle" style={{width: '45px', height: '45px', background: '#d3ad76', color: 'white'}}></i>
                        <div className="pl-3">
                            <h5 style={{color:'#563d26'}}>Horario Escolar</h5>
                            <strong>Lunes - Viernes:</strong>
                            <p className="m-0">10:00 AM - 16:30 PM </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <Link to="#top" className="btn btn-primary p-3 back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="fa fa-angle-double-up"></i></Link>
  </div>
  )
}

export default Contact