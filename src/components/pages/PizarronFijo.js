import React from 'react'
import ProductoDetalle from '../../components/ProductoDetalle';
import ReactHtmlParser from "react-html-parser";

function PizarronFijo() {

    const descrip = `<p>Para la Presencialidad, para la Virtualidad, para el Híbrido<br> 
    Los <strong>Pizarrones Digitales USB THScreen</strong> son la Solución 
    Táctiles, para trabajar las imágenes Proyectadas 
    o Digitalizando lo que escribimos con el Fibrón<br>
    Incluye un Pendrive con Programas , Plataforma, APP y Bibliotecas 
    Para crear clases Interactivas y Motivadoras 
    y capacitación para poder usar el Pizarrón y todas las Herramientas Digitales<br> 
    Pizarrón Digital USB  60 Pulgadas  (1,40 x 0,80m)<br> 
    Soporta sistema Windows y Android <br>
    20 Toques <br>
    Digitaliza lo que se escribe con Fibrón 
    Es interactivo, Táctil , en las imágenes proyectadas 
    Disponible en diferentes tamaños</p>`

    return (
        <div>
            <ProductoDetalle
                img='./images/pizarron-pared-thscreen.jpg'
                titulo='Pizarra Fija THScreen'
                descripcion={ReactHtmlParser(descrip)}
                precio='USD 450'
                path='Contacto'  
                link='https://youtu.be/_mgnVV82wEg'              
            />
            
        </div>
    )
}

export default PizarronFijo
