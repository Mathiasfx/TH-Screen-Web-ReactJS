import React from 'react'
import ProductoDetalle from '../../components/ProductoDetalle';
import ReactHtmlParser from "react-html-parser";

function PizarronDigitalMovil() {

    const descrip = `<p>Pizarrón Digital Móvil USB con Pedestal con ruedas 60 Pulgadas  (1,40 x 0,80m) 
    Soporta sistema Windows y Android<br> 
    20 Toques <br>
    Digitaliza lo que se escribe con Fibrón <br>
    Es interactivo, Táctil , en las imágenes proyectadas 
    Incluye Software , Programas , Plataforma y APP , para hacer clases o Presentaciones Interactivas y Motivadoras.
    Incluyen Capacitación y Soporte .
    Disponible en diferentes tamaños </p>`

    return (
        <div>
            <ProductoDetalle
                img='./images/pizarron-thscreen.jpg'
                titulo='Pizarra Movil THScreen'
                descripcion={ReactHtmlParser(descrip)}
                precio='USD 650'
                path='Contacto'  
                link='https://youtu.be/_mgnVV82wEg '              
            />
            
        </div>
    )
}

export default PizarronDigitalMovil;
