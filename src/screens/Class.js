import React from 'react'
import { Link } from 'react-router-dom'

const Class = () => {
    const Clases = ({imgSrc, altText, name, texto}) => (
        <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src={imgSrc} alt={altText}/>
                <div className="card-body text-center">
                    <h4 className="card-title" style={{color:' #549949'}}>{name}</h4>
                    <p className="card-text" style={{textAlign: "justify"}}>{texto}</p>
                </div>
            </div>
        </div>
    );

  return (
    <div>
      <div className="container-fluid mb-5" style={{background: '#EFE4D7' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px'}}>
                <h3 className="display-3 font-weight-bold" style={{color:'#563d26'}}>Nuestras clases </h3>
                <div className="d-inline-flex" style={{color:'#563d26'}}>
                    <p className="m-0"><Link to="/" style={{color:'#563d26', textDecoration: "none" , fontWeight: 'bold'}}>Home</Link></p>
                    <p className="m-0 px-2">/</p>
                    <p className="m-0" style={{color:'#563d26', fontWeight: 'bold'}}>Nuestras clases</p>
                </div>
            </div>
        </div>
      <div className="container-fluid pt-5">
          <div className="container">
              <div className="text-center pb-2">
                  <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Creadas para tus hijos</span></p>
                  <h1 className="mb-4" style={{color:"#940013"}}>Echales un vistazo</h1>
              </div>
              <div className="row">
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/robotica.png`} altText="Foto de la clase de Robótica" name="Robótica" texto="En las clases de Robótica, los niños exploran el mundo de la tecnología y la programación. A través de proyectos prácticos, los profesores les enseñan a diseñar y construir robots, fomentando la creatividad y el trabajo en equipo. Esta asignatura les ayuda a desarrollar habilidades técnicas esenciales para el futuro." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/maria2.png`} altText="Foto de la clase de Inglés" name="Inglés" texto="En las clases de Inglés, los niños descubren un nuevo mundo a través de canciones, juegos y actividades interactivas que hacen del aprendizaje un proceso divertido. Con un enfoque práctico, los profesores fomentan la comunicación y la confianza en el uso del idioma. Las horas de lectura les ayudan a adquirir vocabulario." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/clsmates.png`} altText="Foto de la clase de Matemáticas" name="Matemátias" texto="En nuestras clases de matemáticas, los niños exploran conceptos de forma divertida, descubriendo cómo funcionan a través de juegos y actividades prácticas. Los profesores guían a los alumnos para que no solo aprendan a resolver operaciones, sino que entiendan el 'por qué' detrás de cada número, fomentando su curiosidad y amor por el aprendizaje." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/clslengua1.png`} altText="Foto de la clase de Lengua Castellana" name="Lengua Castellana" texto="En las clases de Lengua Castellana, los niños exploran el mundo de las palabras a través de lecturas, juegos y actividades creativas. Además, disfrutan de horas de lectura semanalmente. Los profesores fomentan tanto la comprensión lectora como la expresión escrita, ayudando a los alumnos a desarrollar su imaginación y habilidades comunicativas." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/musicapablo.png`} altText="Foto de la clase de Música" name="Música" texto="En las clases de Música, los niños descubren el mundo de los sonidos a través de canciones, juegos y ritmos. Los profesores les enseñan a disfrutar de la música, desarrollando su oído musical y fomentando la creatividad, mientras aprenden a expresarse a través de diferentes instrumentos y melodíde manera lúdica y divertida." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/clssociales2.png`} altText="Foto de la clase de Sociales" name="Sociales" texto="En las clases de Sociales, los niños aprenden sobre su entorno, historia y cultura. Los profesores fomentan la curiosidad y el pensamiento crítico, invitando a los alumnos a investigar y comprender el mundo que les rodea. Esto les permite desarrollar una visión más amplia y responsable de la sociedad en la que viven." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/clsgallego.png`} altText="Foto de la clase de Lengua Gallega" name="Lengua Gallega" texto=" En las clases de Lengua Gallega, los niños se conectan con su identidad cultural a través de cuentos, canciones y juegos tradicionales.Se sumergen en historias que les permiten explorar la riqueza de su lengua y su historia. Los profesores estimulan la creatividad y la expresión oral, fortaleciendo su conexión con la lengua gallega." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/clsnaturales.png`} altText="Foto de la clase de Naturales" name="Naturales" texto=" En las clases de Ciencias Naturales, los niños exploran el mundo que les rodea a través de experimentos, observaciones y actividades prácticas. Los profesores fomentan la curiosidad y el aprendizaje activo, ayudándoles a comprender los fenómenos naturales de forma práctica, en un entorno dinámico, estimulante y enriquecedor." />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/religion.png`} altText="Foto de la clase de Religión" name="Religión" texto="En las clases de Religión o Valores, los niños aprenden sobre la importancia de la ética, la convivencia y el respeto hacia los demás. A través de cuentos y actividades, los profesores fomentan la reflexión sobre sus acciones, desarrollando valores como la empatía y la solidaridad, y ayudando a formar ciudadanos responsables y conscientes."/>
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/clsplastica.png`} altText="Foto de la clase de Plástica" name="Plástica" texto="En las clases de Plástica, los niños expresan su creatividad a través de diversas técnicas como el dibujo, la pintura y las manualidades. Los profesores les animan a experimentar con diferentes materiales y a desarrollar su imaginación, fomentando el gusto por el arte y el trabajo manual en un ambiente relajado y estimulante."/>
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/clsef2.png`} altText="Foto de la clase de Ed.Física" name="Ed.Física" texto="En las clases de Educación Física, los niños se divierten mientras desarrollan sus habilidades motrices y el trabajo en equipo. A través de juegos y deportes, los profesores fomentan hábitos saludables y enseñan la importancia de mantenerse activos, ayudando a los alumnos a disfrutar del ejercicio mientras aprenden valores como el esfuerzo y la cooperación.."/>
              </div>
          </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <p className="section-title pr-5"><span className="pr-2" style={{color:'#d3ad76'}}>Matricúlate</span></p>
                    <h1 className="mb-4" style={{color:"#940013"}}>¡Ven a formar parte de todo esto!</h1>
                    <p style={{textAlign: "justify"}}>¡Plazo de matrícula abierto a partir de mayo! ¡Inscríbete y vive la experiencia educativa que ofrecemos!
                    </p>
                </div>
              </div>
        </div>
      </div>
      <a href="/Class" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </div>
  )
}

export default Class