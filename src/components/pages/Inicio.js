import React, {Fragment} from 'react';
import '../../App.css';
import Productos from '../Productos';
import Slider from '../Slider';
import Footer from '../Footer';

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function  Inicio () {
    return(
        <Fragment>
            <Slider/>
            <Productos/>
            <WhatsAppWidget 
            phoneNumber='543704355467'
            message='Hola! 👋🏼  ¿Como te podemos ayudar?'
            companyName='TH Screen'
            textReplyTime='Normalmente responde en 1 hora'
            sendButton='Enviar'/>
            <Footer/>
        </Fragment>
    )
}

export default Inicio;
