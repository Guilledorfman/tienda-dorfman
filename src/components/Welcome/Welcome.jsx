import React from 'react'
import './Welcome.css'
import Carousel from 'react-bootstrap/Carousel';


const Welcome = () => {
    return (
                <Carousel className="d-flex mb-2">
                    <Carousel.Item className="carousel-item">
                        <img
                        className="d-block w-100"
                        src="https://cdn.korg.com/es/products/upload/c8300f93b5915d43a72821e7aeee23de.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption className="caption">
                        <h3>Welcome to my E-commerce</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.korg.com/es/products/upload/7fdcd5d2861bfb6cf2ced09f6ae110a8.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption className="caption">
                        <h3>Best prices</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.korg.com/es/products/upload/ecc9eb011296db4a50974b3b18c100d7.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption className="caption">
                        <h3>Made with love</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
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
