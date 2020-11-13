import React from 'react'
import ProductoDetalle from '../../components/ProductoDetalle';
import ReactHtmlParser from "react-html-parser";

function PizarronFijo() {

    const descrip = '<p>84 Pulgadas Táctil , convierte en interactivo lo que se Proyecte sobre él, se puede escribir con Fibrón y digitalizar lo que se escribe o compartirlo en una Videoconferencia. Viene en 2 Versiones, Fijo de Pared es el valor publicado o móvil , con estructura de soporte con ruedas por un 20% más del Valor</p>'

    return (
        <div>
            <ProductoDetalle
                img='./images/pizarron-pared-thscreen.jpg'
                titulo='Pizarra Fija THScreen'
                descripcion={ReactHtmlParser(descrip)}
                precio='USD 650'
                path='Contacto'  
                link='https://www.youtube.com/watch?v=ry8irsYttc8&feature=youtu.be'              
            />
            
        </div>
    )
}

export default PizarronFijo
