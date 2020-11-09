import React, {Fragment} from 'react';
import '../../App.css';
import Productos from '../Productos';
import Slider from '../Slider';
import Footer from '../Footer';

function  Inicio () {
    return(
        <Fragment>
            <Slider/>
            <Productos/>
            <Footer/>
        </Fragment>
    )
}

export default Inicio;
