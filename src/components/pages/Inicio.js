import React, {Fragment} from 'react';
import '../../App.css';
import Productos from '../Productos';
import Slider from '../Slider';

function  Inicio () {
    return(
        <Fragment>
            <Slider/>
            <Productos/>
        </Fragment>
    )
}

export default Inicio;
