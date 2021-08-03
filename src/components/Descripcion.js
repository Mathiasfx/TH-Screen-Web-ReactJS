import React from 'react';
import { Link } from 'react-router-dom';
import './Descripcion.css';

function Descripcion({descripcion,link}) {
    
    let linkok;

    if (link) {linkok = link } else{ linkok=''};
    
    return (
        <div className='desc'>
            <p>{descripcion}</p>
            <Link to={linkok}>           
            <span>{linkok}</span>   
            </Link>     
        </div>
    )
}

export default Descripcion
