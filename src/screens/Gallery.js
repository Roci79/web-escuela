import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    const Clases = ({imgSrc, altText, imagen}) => (
        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
                <img className="img-fluid w-100" src={imgSrc} alt={altText}/>
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href={imagen} data-lightbox="portfolio">
                    <i className="fa fa-plus text-white" style={{fontSize: '60px'}}></i>
                    </a>
                </div>
            </div>
        </div>
    );
    
  return (
    <div>
        <div className="container-fluid mb-5" style={{background: '#EFE4D7' }}>
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '400px'}}>
              <h3 className="display-3 font-weight-bold" style={{color:'#563d26'}}>Gallery</h3>
              <div className="d-inline-flex" style={{color:'#563d26'}}>
                  <p className="m-0"><Link to= "/" style={{color:'#563d26', textDecoration: "none", fontWeight: 'bold'}}>Home</Link></p>
                  <p className="m-0 px-2">/</p>
                  <p className="m-0" style={{color:'#563d26', fontWeight: 'bold'}}>Gallery</p>
              </div>
          </div>
      </div>
      <div className="container-fluid pt-5 pb-3">
          <div className="container">
              <div className="text-center pb-2">
                  <p className="section-title px-5"><span className="px-2" style={{color:'#d3ad76'}}>Nuestra Galería</span></p>
                  <h1 className="mb-4" style={{color:"#940013"}}>Fotazas con nuestros alumnos.</h1>
              </div>
              <div className="row portfolio-container">
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g1.png`} altText="Fotaza 1" imagen={`${process.env.PUBLIC_URL}/img/g1.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g2.png`} altText="Fotaza 2" imagen={`${process.env.PUBLIC_URL}/img/g2.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g3.png`} altText="Fotaza 3" imagen={`${process.env.PUBLIC_URL}/img/g3.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g4.png`} altText="Fotaza 4" imagen={`${process.env.PUBLIC_URL}/img/g4.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g5.png`} altText="Fotaza 5" imagen={`${process.env.PUBLIC_URL}/img/g5.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g6.png`} altText="Fotaza 6" imagen={`${process.env.PUBLIC_URL}/img/g6.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g7.png`} altText="Fotaza 7" imagen={`${process.env.PUBLIC_URL}/img/g7.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g8.png`} altText="Fotaza 8" imagen={`${process.env.PUBLIC_URL}/img/g8.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g9.png`} altText="Fotaza 9" imagen={`${process.env.PUBLIC_URL}/img/g9.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g10.png`} altText="Fotaza 10" imagen={`${process.env.PUBLIC_URL}/img/g10.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g10.png`} altText="Fotaza 10" imagen={`${process.env.PUBLIC_URL}/img/g10.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g11.png`} altText="Fotaza 11" imagen={`${process.env.PUBLIC_URL}/img/g11.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g12.png`} altText="Fotaza 12" imagen={`${process.env.PUBLIC_URL}/img/g12.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g13.png`} altText="Fotaza 13" imagen={`${process.env.PUBLIC_URL}/img/g13.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g14.png`} altText="Fotaza 14" imagen={`${process.env.PUBLIC_URL}/img/g14.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g15.png`} altText="Fotaza 15" imagen={`${process.env.PUBLIC_URL}/img/g15.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g16.png`} altText="Fotaza 16" imagen={`${process.env.PUBLIC_URL}/img/g16.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g17.png`} altText="Fotaza 17" imagen={`${process.env.PUBLIC_URL}/img/g17.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g18.png`} altText="Fotaza 18" imagen={`${process.env.PUBLIC_URL}/img/g18.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g19.png`} altText="Fotaza 19" imagen={`${process.env.PUBLIC_URL}/img/g19.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g20.png`} altText="Fotaza 20" imagen={`${process.env.PUBLIC_URL}/img/g20.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g21.png`} altText="Fotaza 21" imagen={`${process.env.PUBLIC_URL}/img/g21.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g22.png`} altText="Fotaza 22" imagen={`${process.env.PUBLIC_URL}/img/g22.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g23.png`} altText="Fotaza 23" imagen={`${process.env.PUBLIC_URL}/img/g23.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g24.png`} altText="Fotaza 24" imagen={`${process.env.PUBLIC_URL}/img/g24.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g25.png`} altText="Fotaza 25" imagen={`${process.env.PUBLIC_URL}/img/g25.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g26.png`} altText="Fotaza 26" imagen={`${process.env.PUBLIC_URL}/img/g26.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g27.png`} altText="Fotaza 27" imagen={`${process.env.PUBLIC_URL}/img/g27.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g28.png`} altText="Fotaza 28" imagen={`${process.env.PUBLIC_URL}/img/g28.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g29.png`} altText="Fotaza 29" imagen={`${process.env.PUBLIC_URL}/img/g29.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g30.png`} altText="Fotaza 30" imagen={`${process.env.PUBLIC_URL}/img/g30.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g31.png`} altText="Fotaza 31" imagen={`${process.env.PUBLIC_URL}/img/g31.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g32.png`} altText="Fotaza 32" imagen={`${process.env.PUBLIC_URL}/img/g32.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g33.png`} altText="Fotaza 33" imagen={`${process.env.PUBLIC_URL}/img/g33.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g34.png`} altText="Fotaza 34" imagen={`${process.env.PUBLIC_URL}/img/g34.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g35.png`} altText="Fotaza 35" imagen={`${process.env.PUBLIC_URL}/img/g35.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g36.png`} altText="Fotaza 36" imagen={`${process.env.PUBLIC_URL}/img/g36.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g37.png`} altText="Fotaza 37" imagen={`${process.env.PUBLIC_URL}/img/g37.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g38.png`} altText="Fotaza 38" imagen={`${process.env.PUBLIC_URL}/img/g38.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g39.png`} altText="Fotaza 39" imagen={`${process.env.PUBLIC_URL}/img/g39.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g40.png`} altText="Fotaza 40" imagen={`${process.env.PUBLIC_URL}/img/g40.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g41.png`} altText="Fotaza 41" imagen={`${process.env.PUBLIC_URL}/img/g41.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g42.png`} altText="Fotaza 42" imagen={`${process.env.PUBLIC_URL}/img/g42.png`} />
              <Clases imgSrc={`${process.env.PUBLIC_URL}/img/g43.png`} altText="Fotaza 43" imagen={`${process.env.PUBLIC_URL}/img/g43.png`} />
              </div>
          </div>
      </div>
      <a href="/Gallery" className="btn btn-primary p-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </div>
  )
}

export default Gallery