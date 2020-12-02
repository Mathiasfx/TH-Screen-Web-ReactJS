import React, {Fragment} from 'react';
import ProductoDetalle from '../../components/ProductoDetalle';
import ReactHtmlParser from "react-html-parser";


function Rotafolio() {

    const descrip =  `El Rotafolio Digital <strong>THScreen 43"</strong> viene con un cable USB
    que nos permite conectarlo a la computadora de manera que si escribimos 
    Digitaliza o Comparte nuestros  escritos en una videoconferencia y si
    Proyectamos imágenes sobre él , las vuelve táctiles  al dedo o a un lápiz.</br>
    Viene montado sobre un soporte con ruedas, que además de permitir trasladarlo muy
    fácilmente, nos da la posibilidad de girar el tablero y utilizarlo como Pizarrón Digital.
    Incluye adaptador OTG - USB para poder usar con celulares y Tablets Tiene una superficie de
    trabajo de <strong>0,95 x 0,55</strong> y en el modelo 50 de <strong>1,10 x 0,62</strong>`;

    return (
        <Fragment>
            <ProductoDetalle
            img='./images/rotafolio-thscreen.jpg'
            titulo='Rotafolio Digital THScreen 2 en 1'
            descripcion={ReactHtmlParser(descrip)}
            precio='$38700'
            path='Contacto'  
            link=''/>

        </Fragment>
            
        
    )
}

export default Rotafolio
