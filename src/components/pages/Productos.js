import React, {Fragment} from 'react';
import '../../App.css';
import ProductosSeccion from '../ProductosSeccion';

import Footer from '../Footer';

function  Inicio () {
    return(
        <Fragment>
            <ProductosSeccion/>
            <Footer/>
        </Fragment>
    )
}

export default Inicio;