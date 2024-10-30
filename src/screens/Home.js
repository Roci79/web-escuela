
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import { Howl } from 'howler';
import MusicButton from './MusicButton';



const Home = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
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

      const TeamMember = ({ name, especialidad, imgSrc, altText }) => (
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
            <i style={{color:'#44843d'}}>{especialidad}</i>
        </div>
    );
    const Cuadrados = ({name,texto}) => (
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="d-flex shadow-sm border-top rounded mb-4 bg-light" style={{padding: "30px"}}>
                <i className="flaticon-022-drum h1 font-weight-normal mb-3" style={{color:'#940215'}}></i>
                <div className="pl-4">
                    <h4 style={{color:'#563d26'}}>{name}</h4>
                    <p className="m-0" style={{ textAlign: 'justify' }}>{texto}</p>
                </div>
            </div>
        </div>
    );
    const Cartas = ({imgSrc, altText, cursos, textoCarta, edad, numNiños}) => (
        <div className="col-lg-4 mb-5">
        <div className="card border-0 bg-light shadow-sm pb-2">
            <img className="card-img-top mb-2" src={imgSrc} alt={altText}/>
            <div className="card-body text-center">
                <h4 className="card-title" style={{color:'#940215'}}>{cursos}</h4>
                <p className="card-text" style={{ textAlign: 'justify' }}>{textoCarta}</p>
            </div>
            <div className="card-footer bg-transparent py-4 px-5">
                <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right"><strong>Edad niños</strong></div>
                    <div className="col-6 py-1">{edad}</div>
                </div>
                <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right"><strong>Niños 2024</strong></div>
                    <div className="col-6 py-1">{numNiños}</div>
                </div>
                <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right"><strong>Horario Escolar</strong></div>
                    <div className="col-6 py-1">10:00 - 16:30</div>
                </div>
            </div>
        </div>
    </div>
    );
    const Blog =({imgSrc, altText, name, texto}) => (
        <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={imgSrc} alt={altText}/>
                    <div className="card-body bg-light text-center p-4">
                        <h4 className="" style={{color:'#940215'}}>{name}</h4>
                        <p style={{ textAlign: 'justify'}}>{texto}</p>
                        <Link to="/Blog#halloween" className="btn btn-primary px-4 mx-auto my-2">Leer Más</Link>
                    </div>
            </div>
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
      <div className="container-fluid px-0 px-md-5 mb-5" style={{background: '#EFE4D7' }}>
          <div className="row align-items-center px-3">
              <div className="col-lg-6 text-center text-lg-left" style={{marginLeft: '0px'}}>
                  <h4 className=" mb-4 mt-5 mt-lg-0" style={{color:'#563d26'}}>CEIP A Barqueira</h4>
                  <h1 className="display-3 font-weight-bold " style={{color:'#563d26'}}>Exploramos, aprendemos, crecemos juntos.</h1>
                  <p style={{ textAlign: 'justify', color:'#563d26' }} className=" mb-4" >En nuestro centro, ofrecemos una educación innovadora y cercana, basada en proyectos, que permite a los niños aprender de manera activa y práctica.
                     Con un enfoque personalizado, nuestras clases están organizadas en grupos reducidos de dos niveles, promoviendo el aprendizaje colaborativo entre diferentes edades. 
                     Además, aprovechamos al máximo nuestro entorno con actividades en un huerto escolar y frecuentes excursiones, donde los alumnos exploran y descubren el mundo que los rodea. 
                     Con solo 49 alumnos, cada niño es conocido, valorado y guiado de manera individual, fomentando su crecimiento integral y su conexión con la naturaleza y la comunidad.</p>
                     <br/>
                     <p style={{fontSize:"11px"}}>Música para acompañar este descubrimiento educativo.</p>
                     <MusicButton />
              </div>
              <div className="col-lg-6 text-center text-lg-right" id="top">
                  <img className="img-fluid mt-5" src={`${process.env.PUBLIC_URL}/img/DosFondo1.png`} alt="Encabezado" style={{width:'700px', height:'600px'}} />        
              </div>
          </div>
      </div>
  
      <div className="container-fluid pt-5 ">
          <div className="container pb-3">
              <div className="row">
              <Cuadrados name="Zona de Juegos" texto="Rodeado de naturaleza, nuestro colegio invita a los niños a disfrutar y explorar en un entorno natural con áreas de juego y espacios al aire libre, fomentando su desarrollo físico y emocional" />
              <Cuadrados name="Act. Extraescolares" texto="Nuestro colegio, ofrecemos actividades extraescolares en horario escolar que enriquecen la formación de los niños, promoviendo su creatividad y trabajo tanto individual como en equipo." />
              <Cuadrados name="Proyectos y Recursos" texto="El colegio forma parte de un proyecto de introducción a la robótica en primaria,además de contar con club de lectura, ciencias, radio..., que enriquecen la educación y fomentan el aprendizaje." />
              <Cuadrados name="Servicio de Autobús" texto="Nuestro colegio ofrece un servicio de autobús para llevar y traer a los niños, garantizando un transporte seguro y cómodo a servicio de las familias." />
              <Cuadrados name="Comedor Escolar" texto="Nuestro colegio cuenta con un comedor con cocinero propio, garantizando que los niños disfruten de comidas frescas y saludables, elaboradas cada día con ingredientes de calidad." />  
              <Cuadrados name="Excursiones" texto="El colegio organiza excursiones a lo largo del curso, brindando a los niños la oportunidad de explorar su entorno a través de experiencias únicas y enriquecedoras." />
              </div>
          </div>
      </div>
  
      <div className="container-fluid py-5">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-5">
                      <img className="img-fluid rounded mb-5 mb-lg-0" src={`${process.env.PUBLIC_URL}/img/fam.png`} alt="Foto en familia" />
                  </div>
                  <div className="col-lg-7">
                      <p className="section-title pr-5"><span className="pr-2" style={{color:'#d3ad76'}}>Conocenos</span></p>
                      <h1 className="mb-4" style={{color:'#940215'}}>Una Buena Elección Educativa</h1>
                      <p style={{ textAlign: 'justify' }}>En nuestro colegio, los profesores establecen un vínculo cercano con los padres y los niños, fomentando un ambiente de confianza y colaboración.
                         Su profesionalidad se refleja en la atención personalizada y en el apoyo continuo,
                         asegurando que cada niño se sienta valorado y comprendido en su proceso educativo.</p>
                      <div className="row pt-2 pb-4">
                          <div className="col-6 col-md-4">
                              <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/img/cooperacion.png`} alt="About 1"/>
                          </div>
                          <div className="col-6 col-md-8" >
                              <ul className="list-inline m-0">
                                  <li className="py-2 border-top border-bottom"><i className="fa fa-check  mr-3" style={{color:'#44843d'}}></i>Enfoque Educativo Integral</li>
                                  <li className="py-2 border-bottom"><i className="fa fa-check mr-3" style={{color:'#44843d'}}></i>Atención Personalizada</li>
                                  <li className="py-2 border-bottom"><i className="fa fa-check mr-3" style={{color:'#44843d'}}></i>Recursos Diversos</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div className="container-fluid pt-5">
          <div className="container">
              <div className="text-center pb-2">
                  <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Clases Reducidas</span></p>
                  <h1 className="mb-4" style={{color:'#940215'}}>Las Clases del Centro</h1>
              </div>
              <div className="row">
              <Cartas imgSrc={`${process.env.PUBLIC_URL}/img/clsInfantil.png`} altText="Foto de la clase Infantil" cursos={"1º y 2º Infantil"} 
              textoCarta={"En 1-2 de Infantil, los niños exploran, juegan y descubren en un ambiente acogedor, aprendiendo a través de actividades divertidas y creativas."} edad={"3-5 años"} numNiños={"6"} />
              <Cartas imgSrc={`${process.env.PUBLIC_URL}/img/primero-2.png`} altText="Foto de la clase Infantil" cursos={"1º y 2º Primaria"} 
              textoCarta={"En 1-2 de Primaria, los niños comienzan a fortalecer sus habilidades de lectura y matemáticas en un ambiente cercano y motivador."} edad={"5-8 años"} numNiños={"9"} />
              <Cartas imgSrc={`${process.env.PUBLIC_URL}/img/cls3-4.png`} altText="Foto de la clase 3-4 primaria" cursos={"3º y 4º Primaria"} 
              textoCarta={"En 3-4 de Primaria, los alumnos desarrollan su autonomía mientras avanzan en proyectos colaborativos y actividades de aprendizaje práctico."} edad={"8-10 años"} numNiños={"13"} />
              <Cartas imgSrc={`${process.env.PUBLIC_URL}/img/cls5-6.png`} altText="Foto de la clase 3-4 primaria" cursos={"5º y 6º Primaria"} 
              textoCarta={"En 5-6 de Primaria, los estudiantes se preparan para nuevos retos con proyectos que desarrollan el pensamiento crítico y la responsabilidad."} edad={"10-12 años"} numNiños={"6"} />
              </div>
          </div>
      </div>

      <div className="container-fluid pt-5">
          <div className="container">
              <div className="text-center pb-2">
                  <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Profesorado</span></p>
                  <h1 className="mb-4" style={{color:'#940215'}}>Conoce nuestros Docentes</h1>
              </div>
              <div className="row">
              <TeamMember name="Pablo" especialidad="Especialidad: Música" imgSrc={`${process.env.PUBLIC_URL}/img/pablo2.png`} altText="Foto del profesor Pablo" />
              <TeamMember name="María" especialidad="Especialidad: Inglés" imgSrc={`${process.env.PUBLIC_URL}/img/maria1.png`} altText="Foto de la profesora María" />
              <TeamMember name="Araceli" especialidad="Especialidad: Ed.Física" imgSrc={`${process.env.PUBLIC_URL}/img/ara.png`} altText="Foto de la profesora Araceli" />
              <TeamMember name="Carmen" especialidad="Especialidad: Biblioteca/religión" imgSrc={`${process.env.PUBLIC_URL}/img/carmen.png`} altText="Foto de la profesora Carmen" />
              </div>
          </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container p-0">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Opiniones</span></p>
                <h1 className="mb-4" style={{color:'#940215'}}>Los padres dicen:</h1>
            </div>
          
            <Slider {...settings} className="post-carousel testimonial-carousel">
            <Carousel texto="Estoy muy satisfecha con el colegio, así que matriculé a mi segundo hijo sin dudarlo." imgSrc={`${process.env.PUBLIC_URL}/img/madre2.png`} altText="Foto de Lourdes" name="Lourdes" profesion="Enfermera" />
            <Carousel texto="Valoro mucho las extraescolares, mis hijos disfrutan aprendiendo y divirtiéndose al mismo tiempo." imgSrc={`${process.env.PUBLIC_URL}/img/papa1.png`} altText="Foto de Eduardo" name="Eduardo" profesion="Modelo" />
            <Carousel texto="Los profesores son excepcionales, siempre atentos y comprometidos con el aprendizaje de mis hijos." imgSrc={`${process.env.PUBLIC_URL}/img/madre1.png`} altText="Foto de Lucía" name="Lucía" profesion="Podóloga" /> 
            <Carousel texto="El ambiente familiar hace que los niños se sientan bienvenidos y seguros, creando una comunidad cercana." imgSrc={`${process.env.PUBLIC_URL}/img/papa2.png`} altText="Foto de Martín" name="Martín" profesion="Empresario" />
            </Slider>
        </div>
    </div>

      <div className="container-fluid pt-5">
          <div className="container">
              <div className="text-center pb-2">
                  <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Blog</span></p>
                  <h1 className="mb-4" style={{color:'#940215'}}>Últimas entradas</h1>
              </div>
              <div className="row pb-3">
              <Blog imgSrc={`${process.env.PUBLIC_URL}/img/hallowen.png`} altText="Foto de Halloween" name="Halloween" texto="Cada año, nuestro colegio celebra Halloween con disfraces, manualidades y actividades divertidas, permitiendo que los niños disfruten de un día lleno de emoción. Juegos y cuentos también forman parte de esta jornada especial..." />
              <Blog imgSrc={`${process.env.PUBLIC_URL}/img/magosto.png`} altText="Foto de Castañas" name="Castañas" texto="Cada año, nuestro colegio celebra el Magosto asando castañas e invitando a los padres a compartirlas. Los niños disfrutan de juegos al aire libre y participan en un concurso de calabazas decoradas..." />
              <Blog imgSrc={`${process.env.PUBLIC_URL}/img/belenViviente.png`} altText="Foto del Belén Viviente" name="Belén Viviente" texto="Cada año, nuestro colegio organiza un belén viviente por Navidad, protagonizado por los niños. Los padres asisten para disfrutar de esta emotiva representación, que se ha convertido en una tradición..." />
              </div>
          </div>
      </div>
      {/* <a href="#top" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up"></i></a> */}
    </div>
  )
}

export default Home