import React, {Fragment} from 'react';
import '../../App.css';
import Formulario from '../../components/Formulario';

import Footer from '../Footer';

function  Inicio () {
    return(
        <Fragment>
            <div className="Contacto-Container">
                <h2>Formulario de Contacto</h2>
                <Formulario/>
            </div>         
            <Footer/>
        </Fragment>
    )
}

export default Inicio;