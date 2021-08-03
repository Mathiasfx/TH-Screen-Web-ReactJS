import React, {Fragment} from 'react';
import ProductoDetalle from '../../components/ProductoDetalle';
import ReactHtmlParser from "react-html-parser";

function PantallaTactil() {

    const descrip ='<p>Incluye Soft Educativo <strong>Smart Learning Suite Contenidos</strong>, clases, evaluacion, Colaboracion en la punta de tus dedos<br> con <strong>TH Screen</strong> podes escribir con el dedo o un Lapiz</p>';

    return (
        <div>
            <ProductoDetalle
                img='./images/pantalla-thscreen.jpg'
                titulo='Pantalla Interactiva THSCREEN'
                descripcion={ReactHtmlParser(descrip)}
                precio='$49.000'
                path='Contacto'  
                link='https://www.youtube.com/watch?v=h8X4IkzM0jM'              
            />
            
        </div>
    )
}

export default PantallaTactil
