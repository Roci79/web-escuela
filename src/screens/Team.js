
import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


const Team = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000, // similar a smartSpeed
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 576,
            settings: { slidesToShow: 1 },
          },
        ],
      };

      const TeamMember = ({ name, imgSrc, altText }) => (
        <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}}>
                <img className="img-fluid w-100" src={imgSrc} alt={altText} />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                    <Link to="" className="btn btn-outline-light"><i className="fab fa-twitter"></i></Link>
                    <Link to="" className="btn btn-outline-light"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="" className="btn btn-outline-light"><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
            <h4 style={{color:"#940013"}}>{name}</h4>
        </div>
    );

    const Carousel = ({ texto, imgSrc, altText, name, profesion }) => (
           <div className="testimonial-item px-3">
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"><span className="sr-only"></span></h3>
                 {texto}
              </div>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src={imgSrc} style={{width: '70px', height: '70px'}} alt={altText}/>
                    <div className="pl-3">
                        <h5>{name}</h5>
                        <i>{profesion}</i>
                    </div>
              </div>
            </div>
    );


  return (
    <div>
      <div className="container-fluid mb-5" style={{background: '#EFE4D7' }}>
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '400px'}}>
              <h3 className="display-3 font-weight-bold" style={{color:'#563d26'}}>Nuestro Equipo</h3>
              <div className="d-inline-flex" style={{color:'#563d26'}}>
                  <p className="m-0"><Link to="/" style={{color:'#563d26', textDecoration: "none", fontWeight: 'bold'}}>Home</Link></p>
                  <p className="m-0 px-2">/</p>
                  <p className="m-0" style={{color:'#563d26', fontWeight: 'bold'}}>Profesores y Cocinero</p>
              </div>
          </div>
      </div>
      <div className="container-fluid pt-5">
          <div className="container">
              <div className="text-center pb-2">
                  <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Docentes</span></p>
                  <h1 className="mb-4" style={{color:"#940013"}}>Conoce a nuestros profesores</h1>
              </div>
              <div className="row">
              <TeamMember name="Pablo" imgSrc={`${process.env.PUBLIC_URL}/img/pablo2.png`} altText="Foto del profesor Pablo" />
              <TeamMember name="Araceli" imgSrc={`${process.env.PUBLIC_URL}/img/ara.png`} altText="Foto de la profesora Araceli" />
              <TeamMember name="María" imgSrc={`${process.env.PUBLIC_URL}/img/maria1.png`} altText="Foto de la profesora María" />
              <TeamMember name="Carmen" imgSrc={`${process.env.PUBLIC_URL}/img/carmen.png`} altText="Foto de la profesor Carmen" />
              <TeamMember name="Lidia" imgSrc={`${process.env.PUBLIC_URL}/img/lidia.png`} altText="Foto de la profesor Lidia" />
              <TeamMember name="Clara" imgSrc={`${process.env.PUBLIC_URL}/img/clara.png`} altText="Foto de la profesora Clara" />
              <TeamMember name="Raquel" imgSrc={`${process.env.PUBLIC_URL}/img/raquel2.png`} altText="Foto de la profesora Raquel" />
              </div>
          </div>
      </div>
      <div className="container-fluid pt-5">
          <div className="container">
              <div className="text-center pb-2">
                  <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Cocinero</span></p>
                  <h1 className="mb-4" style={{color:"#940013"}}>Conoce a nuestro Cocinero</h1>
              </div>
              <div className="row justify-content-center">
              <TeamMember name="Riqui" imgSrc={`${process.env.PUBLIC_URL}/img/cocinero2.png`} altText="Foto cocinero Riqui" />
             </div>
         </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container p-0">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Testimonios</span></p>
                <h1 className="mb-4" style={{color:"#940013"}}>Los padres dicen:</h1>
            </div>
        
            <Slider {...settings} className="post-carousel testimonial-carousel">
            <Carousel texto="Estoy muy satisfecha con el colegio, así que matriculé a mi segundo hijo sin dudarlo." imgSrc={`${process.env.PUBLIC_URL}/img/madre2.png`} altText="Foto de Lourdes" name="Lourdes" profesion="Enfermera" />
            <Carousel texto="Valoro mucho las extraescolares, mis hijos disfrutan aprendiendo y divirtiéndose al mismo tiempo." imgSrc={`${process.env.PUBLIC_URL}/img/papa1.png`} altText="Foto de Eduardo" name="Eduardo" profesion="Modelo" />
            <Carousel texto="Los profesores son excepcionales, siempre atentos y comprometidos con el aprendizaje de mis hijos" imgSrc={`${process.env.PUBLIC_URL}/img/madre1.png`} altText="Foto de Lucía" name="Lucía" profesion="Podóloga" /> 
            <Carousel texto="El ambiente familiar hace que los niños se sientan bienvenidos y seguros, creando una comunidad cercana." imgSrc={`${process.env.PUBLIC_URL}/img/papa2.png`} altText="Foto de Martín" name="Martín" profesion="Empresario" />
            </Slider>
        </div>    
      </div>
      <a href="/Team" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </div>
  );
}

export default Team;


