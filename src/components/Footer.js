import React from 'react';
import './Footer.css';

function Footer (){
    return(
        <div className="Footer-Container">
            <div className='Footer-links'>
                <div className='Footer-links-wrapper'>
                    <div className='Footer-links-item'>
                        <h2>Sobre Nosotros</h2>
                        <p>Desarrollamos soluciones Interactivas Consiste en sensores 
                        colocados en derredor de una Superficie Blanca , sobre la cual podemos 
                        escribir mientras se proyecta una imagen o aunque no haya imagen proyectada
                         y lo que hagamos con el dedo o un marcador queda digitalizado.</p>
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