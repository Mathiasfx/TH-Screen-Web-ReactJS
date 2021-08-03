import React from 'react';
import './ProductoDetalle.css';
import Desripcion from './Descripcion';
import { Link } from 'react-router-dom';

function ProductoDetalle({ img, titulo, descripcion, precio,path,link }) {



    return (
        <div className='wrapperProduct'>
            <div className="col-1-2">
                <div className="product-wrap">
                    <div className="product-shot">
                        <img src={img} alt="Pantalla THSCREEN" />
                    </div>
                </div>
            </div>
            <div className="col-1-2">
                <div className="product-info">
                    <h2>{titulo}</h2>
                    
                        <Desripcion
                            descripcion={descripcion}
                            link={link}
                        />
                </div>
                    
                    <div className='precioinfo'>
                        <Link  to={path}>
                             <span className="button">Obtener</span>
                        </Link>
                        <a href='http://www.thscreen.ar/descargas/especificaciones.pdf'>
                             <span className="buttonCaract">Especificaciones</span>
                        </a>
                        <div className='precio'>
                            {precio}
                        </div>
                    </div>
                </div>
            </div>

    )
};

export default ProductoDetalle;
