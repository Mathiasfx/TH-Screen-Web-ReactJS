import React from "react";
import "./Baner.css";

function Baner() {
  return (
    <div className="contenedorAndroid">
      <div className="baner effect2">
        <h3>Soporta Windows y Android</h3>
        <div className="recuadros">
          <div className='servicios'>
            <img className="rounded" src='images/pendrive-con-programas.jpg' alt='Pendrive con Programas THSCREEN' />
            <p><strong>Pendrive con Programas</strong></p>
          </div>
          <div className='servicios'>
            <img className="rounded" src='images/plataforma-app.jpg' alt='Acceso a Plataforma Interactiva'/> 
            <p><strong>Plataforma y APP Educativa</strong></p>
          </div>
          <div className='servicios'>
            <img className="rounded" src='images/bibliotecas.jpg' alt='Bibliotecas Digitales Onlines' />
            <p><strong>Bibliotecas Digitales</strong></p>
          </div>
          <div className='servicios'>
            <img className="rounded" src='images/capacitacion.jpg' alt='Capacitacion sin cargo de parte de THSCREEN'/>  
            <p><strong>Capacitación sin cargo</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baner;
