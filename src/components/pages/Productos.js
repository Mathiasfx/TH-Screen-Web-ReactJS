import React, {Fragment} from 'react';
import '../../App.css';
import Productos from '../Productos';

import Footer from '../Footer';

function  Inicio () {
    return(
        <Fragment>
            <Productos/>
            <Footer/>
        </Fragment>
    )
}

export default Inicio;