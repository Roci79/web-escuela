import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Blog = () => {
    const halloweenRef = useRef(null);
    const magostoRef = useRef(null);
    const belenRef = useRef(null);
    const carnavalRef = useRef(null);
    const excursionesRef = useRef(null);
    const diaRef = useRef(null);
    


    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const location = useLocation();

      useEffect(() => {
          const section = document.getElementById(location.hash.replace('#', ''));
          if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
          }
      }, [location]);

  return (
    <div>
         <div className="container-fluid mb-5" style={{background: '#EFE4D7' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 className="display-3 font-weight-bold" style={{color:'#563d26'}}>Blog</h3>
                <div className="d-inline-flex" style={{color:'#563d26'}}>
                <p className="m-0"><Link to="/" style={{color:'#563d26', textDecoration: "none", fontWeight: 'bold'}}>Home</Link></p>
                    <p className="m-0 px-2">/</p>
                    <p className="m-0"  style={{color:'#563d26', fontWeight: 'bold'}}>Detalles Blog</p>
                </div>
            </div>
        </div>
    
        <div className="container py-5">
            <div className="row pt-5">
                <div className="col-lg-8">
                    <div className="d-flex flex-column text-left mb-3">
                        <p className="section-title pr-5"><span className="pr-2" style={{color:'#d3ad76'}}>Detalles Del Blog</span></p>
                        <div id="halloween" ref={halloweenRef}>
                            <h1 className="mb-3" style={{color:"#940013"}}>Halloween: diversión y Creatividad para Todos.</h1>
                    </div>
                            <div className="mb-5">
                            <img className="img-fluid rounded w-100 mb-4" src={`${process.env.PUBLIC_URL}/img/halloween2.png`} alt="Foto"/>
                            <p style={{ textAlign:"justify"}}>En el CEIP de la Barquera, la fiesta de Halloween es una de las celebraciones más esperadas por los niños y las familias. Durante toda una semana, los pasillos y aulas se llenan de decoraciones temáticas y actividades especiales. Los alumnos, junto con sus profesores, preparan sus disfraces y decoran el colegio, transformándolo en un espacio espeluznante y lleno de sorpresas.</p>
                            <p style={{ textAlign:"justify"}}>Cada clase participa en un concurso de calabazas, donde los niños muestran su creatividad al tallarlas y decorarlas, ¡hay auténticas obras de arte! Además, el famoso Trasno Trouleiro, una figura muy querida por los niños, hace su aparición, dejando pistas y regalitos sorpresa en cada rincón del colegio. Como cierre, celebramos el tradicional Magosto, en el que asamos castañas y las compartimos en familia, creando un ambiente acogedor y festivo.</p>
                            <p style={{ textAlign:"justify"}}>Halloween en nuestro cole no solo es una oportunidad para la diversión, sino también para aprender a trabajar en equipo y fortalecer la unión entre todos. ¡Un evento inolvidable para grandes y pequeños!</p>
                        </div>
                        <div id="magosto" ref={magostoRef}>
                            <h2 className="mb-4" style={{color:"#940013"}}>Magosto: una Tradición Gallega que Nos Une</h2>
                            <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src={`${process.env.PUBLIC_URL}/img/castañas3.png`} alt="Foto"/>
                            <p style={{ textAlign:"justify"}}>Cada otoño, el CEIP de la Barquera celebra el Magosto, una de las tradiciones más queridas y esperadas en Galicia. La preparación comienza con la recolección de castañas, que los niños traen al colegio junto a sus familias. El día del Magosto, el patio se convierte en un auténtico espacio de fiesta y tradición, donde todos se reúnen para asar las castañas en una hoguera al aire libre.</p>
                            <p style={{ textAlign:"justify"}}>En esta jornada, las familias están invitadas a compartir con los niños y el equipo docente, disfrutando juntos de las castañas asadas. Además de la degustación, el colegio organiza juegos tradicionales y actividades al aire libre, llenando el día de momentos de diversión y camaradería. Para muchos, es un día especial para reconectar con la cultura gallega y para que los más pequeños comprendan el valor de nuestras tradiciones.</p> 
                            <p style={{ textAlign:"justify"}}>El Magosto en el CEIP de la Barquera no solo celebra el otoño y las costumbres de nuestra tierra, sino que también fortalece el lazo entre familias, alumnos y profesores. Sin duda, una tradición que continúa aportando calidez y recuerdos inolvidables a nuestra comunidad educativa.</p>
                        </div>
                        <div id="belen" ref={belenRef}>
                            <h3 className="mb-4" style={{color:"#940013"}}>Belén Viviente: la Magia de la Navidad </h3>
                            <img className="img-fluid rounded w-50 float-right ml-4 mb-3" src={`${process.env.PUBLIC_URL}/img/belen3.png`} alt="Foto"/>
                            <p style={{ textAlign:"justify"}}>Cada diciembre, el CEIP de la Barquera se transforma para recibir el espíritu navideño con su ya tradicional Belén Viviente. Los alumnos son los protagonistas de esta celebración, representando a los personajes del nacimiento en un escenario preparado especialmente para la ocasión. Desde pastores hasta artesanos, todos los roles son interpretados por los niños, quienes aportan entusiasmo y autenticidad a la recreación.</p>
                            <p style={{ textAlign:"justify"}}>El Belén Viviente se convierte en un momento de encuentro entre toda la comunidad escolar. Las familias son invitadas a presenciar la obra, disfrutando de la emoción de sus hijos mientras representan esta historia clásica de Navidad. Los docentes se involucran en la preparación y los detalles de cada escena, logrando un ambiente único y lleno de ilusión.</p>
                            <p style={{ textAlign:"justify"}}>Además de la representación, el colegio se llena de decoraciones navideñas y actividades especiales, todo diseñado para celebrar estas fechas tan especiales en un ambiente cálido y acogedor. Esta actividad no solo fortalece los valores de respeto y colaboración, sino que también ofrece a los niños una experiencia creativa y memorable, creando lazos y recuerdos que perduran.</p>
                        </div>
                </div>
                        <div ref={carnavalRef}>        
                            <h1 className="mb-3" style={{color:"#940013"}}>Carnaval: semana de Colores, Sorpresas y el Trasno Trouleiro</h1>
                <div className="mb-5">
                            <img className="img-fluid rounded w-100 mb-4" src={`${process.env.PUBLIC_URL}/img/carnaval.png`} alt="Foto"/>
                            <p style={{ textAlign:"justify"}}>Cada año, el Carnaval llena de alegría y creatividad el CEIP de la Barquera. Durante la semana de Carnaval, los niños y niñas participan en divertidas actividades temáticas: cada día trae un reto diferente, como llevar al cole un sombrero, ponerse calcetines de colores o decorar una máscara. La imaginación no tiene límites, y los pasillos del colegio se llenan de disfraces y accesorios que reflejan el entusiasmo de los estudiantes.</p>
                            <p style={{ textAlign:"justify"}}>La fiesta alcanza su punto culminante con la llegada del misterioso Trasno Trouleiro, una figura mítica que se encarga de traer sorpresas para todos. El Trasno deja pistas y regalos en cada aula, haciendo que los niños vivan la emoción de la búsqueda y el descubrimiento. El martes de Carnaval, festivo local en Cerdido, permite a todos disfrutar de la celebración y preparar con calma sus disfraces más originales para el gran desfile de la semana siguiente.</p>
                            <p style={{ textAlign:"justify"}}>Este Carnaval, además de ser una oportunidad para el juego y la diversión, fortalece los lazos entre los compañeros y fomenta la creatividad. Cada rincón del colegio se llena de risas y color, haciendo de esta semana una de las favoritas para todos los niños y las familias del CEIP de la Barquera.</p>
                        </div>
                        <div ref={excursionesRef}> 
                            <h2 className="mb-4"style={{color:"#940013"}}>Excursiones: aventuras y Descubrimientos para Todas las Edades </h2>
                            <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src={`${process.env.PUBLIC_URL}/img/excursion.png`} alt="Foto"/>
                            <p style={{ textAlign:"justify"}}> Las excursiones son una parte esencial de la vida escolar en el CEIP de la Barquera, y están diseñadas para adaptarse a las edades y curiosidades de los estudiantes. Los más pequeños, entre 3 y 8 años, disfrutan de salidas locales que los conectan con la naturaleza y la vida rural. Estas excursiones suelen llevarlos a granjas donde interactúan con los animales, aprenden sobre el cultivo y viven una jornada educativa al aire libre. La emoción de estos días fomenta su curiosidad y respeto por el entorno.</p>
                            <p style={{ textAlign:"justify"}}> Para los mayores, de 9 a 12 años, la aventura se vuelve aún más grande. Cada primavera, suelen emprender un viaje de cinco días a un destino especial, como Tenerife o Las Palmas, donde exploran el patrimonio, la cultura y los paisajes únicos de las islas. Esta experiencia no solo les permite descubrir nuevos lugares, sino también desarrollar su autonomía y fortalecer los lazos con sus compañeros.</p>
                            <p style={{ textAlign:"justify"}}> Estas excursiones, adaptadas a cada grupo de edad, enriquecen la educación de los alumnos del CEIP de la Barquera, combinando el aprendizaje con vivencias memorables y acercándolos al mundo que los rodea.</p>
                        </div>
                        <div ref={diaRef}> 
                            <h3 className="mb-4"style={{color:"#940013"}}>Día del libro: celebrando la Magia de Leer</h3>
                            <img className="img-fluid rounded w-50 float-right ml-4 mb-3" src={`${process.env.PUBLIC_URL}/img/libro.png`} alt="Foto"/>
                            <p style={{ textAlign:"justify"}}>El Día del Libro en el CEIP de la Barquera es una jornada llena de actividades para despertar y fortalecer la pasión por la lectura. Cada año, los niños participan en talleres de cuentacuentos, dramatizaciones de sus historias favoritas y maratones de lectura donde comparten en voz alta los pasajes que más les inspiran. Además, es tradición que cada clase elija un libro especial para leer en grupo, intercambiar impresiones y explorar sus personajes y mensajes en profundidad.</p>
                            <p style={{ textAlign:"justify"}}>Durante este día, los pasillos y aulas se decoran con citas literarias y obras de autores destacados, y los alumnos mayores comparten tiempo con los más pequeños para leerles cuentos e historias, fomentando un ambiente de colaboración y amor por los libros. Con esta celebración, el CEIP de la Barquera reafirma su compromiso con la lectura como pilar fundamental en el aprendizaje y crecimiento de cada estudiante.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-5 mt-lg-0">           
                    <div className="mb-5">
                    </div>            
                    <div className="mb-5">
                        <img src={`${process.env.PUBLIC_URL}/img/cole.png`} alt="Foto" className="img-fluid rounded"/>
                    </div>
                    <div className="mb-5">
                        <h2 className="mb-4" style={{color:"#940013"}}>Atajos</h2>
                        <div className="d-flex flex-wrap m-n1">
                            <button onClick={() => scrollToSection(halloweenRef)} className="btn btn-outline-primary m-1">Halloween</button>
                            <button onClick={() => scrollToSection(magostoRef)} className="btn btn-outline-primary m-1">Magosto</button>
                            <button onClick={() => scrollToSection(belenRef)} className="btn btn-outline-primary m-1">Belén Viviente</button>
                            <button onClick={() => scrollToSection(carnavalRef)} className="btn btn-outline-primary m-1">Carnaval</button>
                            <button onClick={() => scrollToSection(excursionesRef)} className="btn btn-outline-primary m-1">Excusiones</button>
                            <button onClick={() => scrollToSection(diaRef)} className="btn btn-outline-primary m-1">Día del libro.</button>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        <a href="/Blog" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </div>
  )
}

export default Blog
