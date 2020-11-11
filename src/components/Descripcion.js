import React from 'react';
import './Descripcion.css';

function Descripcion({descripcion,link}) {
    
    let linkok;

    if (link) {linkok = link } else{ linkok=''};
    
    return (
        <div className='desc'>
            <p>{descripcion}</p>           
            <a href={linkok}>{linkok}</a>    
        </div>
    )
}

export default Descripcion
