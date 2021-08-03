import React, {Fragment} from 'react';
import '../../App.css';
import Productos from '../Productos';
import Slider from '../Slider';
import Baner from '../Baner';
import logo from '../../images/fsf.png';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import CalltoAction from '../CalltoAction';

function  Inicio () {
    return(
        <Fragment>
            <Slider/>
            <Baner/>
            <Productos/>
            <WhatsAppWidget 
            phoneNumber='5491144231448'
            message='Hola! 👋🏼  ¿Como te podemos ayudar?'
            companyName='TH Screen'
            textReplyTime='Normalmente responde en 1 hora'
            sendButton='Enviar'/>
            <CalltoAction
            titulo='Fabricado en'
            subtitulo='Argentina'
            contenido=' Incluye Software de Pizarra Digital y para creación de actividades Interactivas y Colaborativas'
            logo={logo}
            />
            
        </Fragment>
    )
}

export default Inicio;
