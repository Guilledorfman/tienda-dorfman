import React from 'react'
import './Welcome.css'
import Carousel from 'react-bootstrap/Carousel';


const Welcome = () => {
    return (
                <Carousel className="d-flex mb-2">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dxoqq4yvo/image/upload/v1642135897/coderhouse-react-tienda/descuentos_jisqe9.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dxoqq4yvo/image/upload/v1642134505/coderhouse-react-tienda/mediosdepago2_ftfren.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>



            // <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            // <div className="carousel-inner">
            //     <div className="carousel-item active">
            //         <img className="d-block w-100" src="http://placeimg.com/640/480/tech" alt="First slide"/>
            //     </div>
            //     <div className="carousel-item">
            //         <img className="d-block w-100" src="http://placeimg.com/640/480/people" alt="Second slide"/>
            //     </div>
            //     <div className="carousel-item">
            //         <img className="d-block w-100" src="http://placeimg.com/640/480/nature" alt="Third slide"/>
            //     </div>
            // </div>
            //     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //         <span className="sr-only">Previous</span>
            //     </a>
            //     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //         <span className="sr-only">Next</span>
            //     </a>
            // </div>
    )
}

export default Welcome
