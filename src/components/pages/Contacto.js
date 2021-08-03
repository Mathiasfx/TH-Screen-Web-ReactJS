import React, {Fragment} from 'react';
import Formulario from '../Formulario';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import '../Formulario.css';
import Formiframe from '../Formiframe';




function  Inicio () {
    return(
        <Fragment>
            <div className="Contacto-Container">
               
                <div className='info-contacto'>
                    <h3>Informacion de Contacto</h3>
                    <p> <i className="fas fa-phone-square-alt"/> 0810 - 333 - 4878</p>
                </div>
                <div>
                    <Formiframe/>
                </div>
                <WhatsAppWidget 
            phoneNumber='5491144231448'
            message='Hola! 👋🏼  ¿Como te podemos ayudar?'
            companyName='TH Screen'
            textReplyTime='Normalmente responde en 1 hora'
            sendButton='Enviar'/>
            </div> 
                    
            
        </Fragment>
    )
}

export default Inicio;