import React, {Fragment} from 'react';
import '../../App.css';
import Productos from '../Productos';
import Slider from '../Slider';
import Footer from '../Footer';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import CalltoAction from '../CalltoAction';

function  Inicio () {
    return(
        <Fragment>
            <Slider/>
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
            />
            
        </Fragment>
    )
}

export default Inicio;
