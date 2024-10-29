import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className="container-fluid mb-5" style={{background: '#EFE4D7' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 className="display-3 font-weight-bold" style={{color:'#563d26'}}>Sobre nosotros</h3>
                <div className="d-inline-flex "style={{color:'#563d26'}}>
                    <p className="m-0"><Link to="/" style={{color:'#563d26', textDecoration: "none", fontWeight: 'bold'}}>Home</Link></p>
                    <p className="m-0 px-2">/</p>
                    <p className="m-0" style={{color:'#563d26', fontWeight: 'bold'}}>Sobre Nosotros</p>
                </div>
            </div>
        </div>
        <div className="container py-5">
            <div className="row pt-5">
                <div className="col-lg-12">
                    <div className="d-flex flex-column text-left mb-3">
                        <p className="section-title pr-5"><span className="pr-2" style={{color:'#d3ad76'}}>La mejor opción</span></p>
                        <h1 className="mb-3" style={{color:"#940013"}}>¿Por qué elegir nuestro colegio?</h1>
                    </div>
                    <div className="mb-5">
                        <img className="img-fluid rounded w-50 float-right ml-4 mb-3" src={`${process.env.PUBLIC_URL}/img/familia4.png`} alt="Foto"/>
                        <div className= "nos-p" style={{textAlign:'justify'}}>
                            <h6 >La mejor opción educativa para tu hijo.</h6>
                            <p>Elegir el colegio adecuado es una de las decisiones más importantes para los padres, y nuestro colegio ofrece una combinación única de factores que lo convierten en la mejor opción para el desarrollo integral de los niños. Con un enfoque centrado en la educación personalizada, el colegio se distingue por su cercanía, su atención individualizada y la creación de un entorno donde cada alumno se siente valorado y apoyado.</p>

                            <h6 >Un entorno natural que fomenta el aprendizaje </h6>
                            <p>Rodeado de naturaleza, nuestro colegio ofrece mucho más que un espacio físico atractivo. Este entorno natural se convierte en una parte fundamental del proceso educativo, ya que los alumnos no solo aprenden en las aulas, sino que interactúan constantemente con el medio que les rodea. El colegio organiza numerosas excursiones a lo largo del curso, permitiendo a los niños explorar, descubrir y aprender en escenarios reales, algo que enriquece enormemente su experiencia educativa.</p>

                            <h6>Metodología basada en proyectos</h6>
                            <p>En nuestro colegio, los alumnos aprenden a través de proyectos innovadores que les ayudan a desarrollar habilidades clave como el pensamiento crítico, la resolución de problemas y el trabajo en equipo. Esta metodología les involucra activamente en su propio aprendizaje, fomentando la curiosidad y el deseo de investigar más allá de los libros. Además, el colegio es parte de un proyecto de robótica que introduce a los niños en el mundo de la tecnología desde primaria, preparándolos para los desafíos del futuro.</p>

                            <h6>Comedor con alimentos frescos y saludables</h6>
                            <p>La salud y el bienestar de los niños son una prioridad para nosotros. A diferencia de muchos centros que dependen de catering externo, nuestro colegio cuenta con un comedor propio y un cocinero que prepara diariamente alimentos frescos y saludables. Esta atención a la alimentación de los alumnos garantiza que reciban una dieta equilibrada, fomentando hábitos saludables desde una edad temprana.</p> 
                        <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src={`${process.env.PUBLIC_URL}/img/familia5.png`} alt="Foto"/>
                            <h6>Cercanía y profesionalidad del equipo docente</h6>
                            <p>Uno de los pilares del colegio es la cercanía entre el equipo docente, los alumnos y las familias. Los profesores no solo son expertos en sus materias, sino que también están comprometidos con el bienestar y el crecimiento personal de cada niño. Esta relación cercana permite un seguimiento continuo del progreso de cada alumno, asegurando que se aborden sus necesidades de forma integral y efectiva. Además, la comunicación abierta con las familias es un valor clave que refuerza el sentido de comunidad y colaboración entre todos.</p> 

                            <h6>Recursos educativos que complementan la enseñanza</h6>
                            <p>Nuestro colegio no solo se enfoca en el aprendizaje académico, sino que también ofrece una amplia variedad de recursos adicionales. Desde la biblioteca hasta la radio escolar, los alumnos tienen la oportunidad de explorar diferentes formas de expresión y conocimiento. Estas actividades extracurriculares se integran en el horario escolar, enriqueciendo la experiencia educativa sin sobrecargar a los estudiantes.</p> 

                            <h6>Un enfoque completo para el desarrollo de los niños</h6>
                            <p>Elegir nuestro colegio significa optar por una educación que va más allá de lo tradicional. Aquí, los niños no solo reciben una excelente formación académica, sino que también aprenden a ser personas íntegras, autónomas y comprometidas con su entorno. Con una metodología que combina innovación, cercanía y un entorno natural privilegiado, nuestro colegio es, sin duda, la mejor opción para garantizar un futuro brillante a tu hijo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <div className="container py-5">
            <div className="row pt-5">
                <div className="col-lg-12">
                    <div className="d-flex flex-column text-left mb-3">
                        <p className="section-title pr-5"><span className="pr-2" style={{color:'#d3ad76'}}>Más Detalles</span></p>
                    </div>
                    <div className="mb-5">
                       <h2 className="mb-4" style={{color:"#940013"}}>Editorial Trasno Trouleiro</h2>
                        <img className="img-fluid rounded w-50 float-right ml-4 mb-3" src={`${process.env.PUBLIC_URL}/img/edittrasno.png`} alt="Foto"/>
                        <p style={{textAlign:'justify'}}>
                        En el CEIP de la Barquera, los niños participan en un proyecto único a través de la Editorial Trasno Trouleiro, donde ellos mismos se convierten en escritores, ilustradores y editores de sus propios libros. Este proceso creativo comienza con la elaboración de sus historias, las cuales van dando forma mientras aprenden técnicas de escritura. A continuación, ilustran sus relatos, desarrollando tanto sus habilidades artísticas como su capacidad para visualizar sus ideas. Finalmente, maquetan y encuadernan sus obras, experimentando todo el proceso editorial. Este proyecto no solo fomenta la creatividad y el amor por la lectura, sino también el trabajo en equipo, la responsabilidad y el orgullo de crear algo completamente suyo.</p>
                        <br/> <br/> <br/> <br/>
                        <h2 className="mb-4" style={{color:"#940013"}}>Radio Trouleira</h2>
                        <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src={`${process.env.PUBLIC_URL}/img/radioTrouleira.png`} alt="Foto"/>
                        <p style={{textAlign:'justify'}}>
                        En el CEIP de la Barquera, los niños tienen la emocionante oportunidad de participar en Radio Trouleira, una emisora escolar que les ofrece un espacio para explorar el mundo de la comunicación. En este proyecto, los alumnos no solo aprenden a expresarse verbalmente, sino que se sumergen en todo el proceso de creación radiofónica. Desde la selección de temas actuales o de interés para la comunidad escolar, hasta la redacción de guiones y la edición de sonido, los niños viven una experiencia completa en los medios de comunicación.

                        La radio escolar permite que los estudiantes desarrollen su creatividad al diseñar secciones como entrevistas, noticias, reportajes, programas culturales y espacios de entretenimiento.

                        Este proyecto no solo impulsa la confianza de los estudiantes para hablar en público, sino que también refuerza su capacidad de trabajar en equipo, gestionar el tiempo y resolver problemas. A través de la radio, los niños no solo comparten sus ideas, sino que también aprenden a escuchar a sus compañeros, colaborando para crear un contenido dinámico que toda la comunidad escolar disfruta. Además, esta iniciativa fortalece los vínculos con las familias, ya que los padres pueden escuchar las emisiones en un enlace publicado por el cole en su página de la Xunta, disfrutando del trabajo de sus hijos y viendo de primera mano sus logros. Radio Trouleira es, sin duda, un medio innovador que integra aprendizaje, tecnología y diversión en el día a día del colegio.</p>
                        <br/> <br/><h2 className="mb-4" style={{color:"#940013"}}>Club de Lectura</h2>
                        <img className="img-fluid rounded w-50 float-right ml-4 mb-3" src={`${process.env.PUBLIC_URL}/img/clubLectura2.png`} alt="Foto"/>
                        <p style={{textAlign:'justify'}}>En el CEIP de la Barquera, los niños tienen la posibilidad de formar parte del Club de Lectura, un espacio donde se fomenta el amor por los libros y la literatura de manera divertida y colaborativa. En este club, los alumnos eligen libros para leer en grupo y participan en sesiones donde comparten sus impresiones, debaten sobre los personajes, tramas e ideas, y descubren nuevas formas de interpretar lo que leen. Más allá de la lectura, el club ofrece un entorno en el que se desarrollan habilidades de análisis crítico y expresión verbal, invitando a los niños a pensar de manera más profunda sobre los textos.  Además, se promueven dinámicas de grupo que estimulan la imaginación y la comprensión lectora a través de juegos, dramatizaciones y discusiones guiadas por los profesores, quienes actúan como facilitadores del aprendizaje. Cada niño tiene la oportunidad de expresarse y de ser escuchado, fortaleciendo así su confianza en la comunicación oral y escrita.

                        El Club de Lectura del CEIP de la Barquera no solo desarrolla habilidades lectoras, sino que también despierta en los alumnos un amor por la palabra escrita, fortaleciendo su imaginación y su capacidad para comprender el mundo a través de los libros.</p>
                    
                        <br/> <br/><h2 className="mb-4" style={{color:"#940013"}}>Club de Ciencias</h2>
                        <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src={`${process.env.PUBLIC_URL}/img/ciencias.png`} alt="Foto"/>
                        <p style={{textAlign:'justify'}}>En el CEIP de la Barquera, el Club de Ciencias ofrece a los niños la oportunidad de explorar el mundo científico de manera práctica y divertida. A través de experimentos, proyectos y actividades, los alumnos descubren conceptos de biología, química, física y medioambiente, fomentando la curiosidad natural que tienen por el entorno. El club organiza talleres donde los niños realizan sus propios experimentos, aprenden el método científico y discuten sus hallazgos en grupo, desarrollando tanto el pensamiento crítico como el trabajo en equipo.

                        Este espacio no solo refuerza los conocimientos adquiridos en clase, sino que también impulsa la creatividad y la pasión por la ciencia, permitiendo que los alumnos se conviertan en pequeños investigadores.</p>
                    </div>
                </div>
            </div>
        </div>
        <a href="/About" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </div>
  );
};

export default About
