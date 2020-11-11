import React, {Fragment} from 'react';
import ProductoDetalle from '../../components/ProductoDetalle';
import ReactHtmlParser from "react-html-parser";

function TableroDigital() {

    const descrip = `Este <strong>Tablero Digital</strong>, me permite sentir que tengo un Pizarrón o un Rotafolio para dar mis clases Virtuales o el día de mañana al volver a clase. 
    Todo lo que trabajo en él se digitaliza, puedo usar mi dedo o un Fibrón , puedo conectarlo a Una Tablet , Celular o Notebook. 
    Trabaja en Windows o en Android <br>
    Los sensores son desmontables y se pueden usar sobre un LCD de 23 para volverlo interactivo.<br>
    El Tablero viene con un Pendrive que trae Programas para realizar clases remotas , interactivas y motivadoras , accesos a Bibliotrecas Digitales y Capacitación .
    El video explica perfectamente su uso`

    return (
        <Fragment>
            <ProductoDetalle
                img='./images/thscreenpizarra.jpg'
                titulo='Tablero Digital THSCREEN'
                descripcion={ReactHtmlParser(descrip)}
                precio='$14.900'
                path='Contacto'  
                link='https://youtu.be/ry8irsYttc8'         
            />        
        </Fragment>
    )
};

export default TableroDigital;
