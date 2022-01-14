import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-cont">
            <div className="main-info">
                <div className="info">
                    <ul>
                        <li><h4>INFORMACIÓN</h4></li>
                        <li><Link className="text-primary" to='/'>INICIO</Link></li>
                        <li>SOBRE NOSOTROS</li>
                        <li>CONTACTO</li>
                        <li>¿DÓNDE ESTAMOS?</li>
                        <li>DATOS BANCARIOS</li>
                        <li>POLITICAS DE PRIVACIDAD</li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul>
                        <li><h4>REDES</h4></li>
                        <li>I</li>
                        <li>F</li>
                    </ul>
                </div>
                <div className="where">
                    <h4>¿DÓNDE ESTAMOS?</h4>
                    <h5>Calle Falsa 123, CABA</h5>
                    <h5><i class="fas fa-phone"></i>45651324</h5>
                    <p>De Lunes a Viernes de 10 a 19 - Sabados y Domingos - CERRADO</p>
                    <p><i class="far fa-envelope"></i>info@tiendafalsa.com</p>
                </div>

            </div>
            <div className="disclaimer">
                <p>Esta web se construyó con fines educativos, no tengo ninguna afiliación con los productos ni sus marcas.</p>
                <p>Guillermo Dorfman 2021</p>
            </div>
        </div>
    )
}

export default Footer
