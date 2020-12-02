import React from 'react';
import './Footer.css';

function Footer (){
    return(
        <div className="Footer-Container">
            <div className='Footer-links'>
                <div className='Footer-links-wrapper'>
                    <div className='Footer-links-item'>
                        <h2>Sobre Nosotros</h2>
                        <p>Convertimos en Interactivas distintas superficies trabajando con sensores y Software que permiten Digitalizar lo que se escribe con un Fibrón o Interactuar con las imágenes proyectadas desde un cañon o de un LCD , en forma táctil.
El Software complementario permite generar clases o Presentaciones interactivas y Motivadoras. 
Desarrollamos soluciones a medida, implementamos y capacitamos a los recursos , para sacar el mayor provecho a la herramienta Digital elegida .</p>
                    </div>                  
                </div>
            </div>

            <div className='Footer-links'>
                <div className='Footer-links-wrapper'>
                    <div className='Footer-links-item'>
                        <h2>Informacion de Contacto</h2>
                        <p className='texto-contacto'><i className="fas fa-phone-square-alt"></i> 0810 - 333 - 4878</p>
                        <p className='texto-contacto'><i className="far fa-envelope"></i> info@thscreen.ar</p>
                        <p className='texto-contacto'><i className="fab fa-chrome"></i> www.thscreen.ar</p>
                    </div>                  
                </div>
            </div>
                           

        </div>
    )

}

export default Footer;