import React from 'react'
import ProductoDetalle from '../../components/ProductoDetalle';
import ReactHtmlParser from "react-html-parser";

function MesaInteractiva() {

    const descrip = '<p>Mesa Interactiva THScreen Incluye Soft Educativo <br><strong>Smart Learning Suite Contenidos</strong> , CLases, Evaluacion. Colaboracion en la punta de tus dedos';

    
    return (
        <div>
               <ProductoDetalle
                img='./images/mesa-thscreen.jpg'
                titulo='Mesa Interactiva THScreen'
                descripcion={ReactHtmlParser(descrip)}
                precio='$64.000'
                path='Contacto'  
                link='https://www.youtube.com/watch?v=h8X4IkzM0jM'              
            />
            
        </div>
    )
}

export default MesaInteractiva;
