import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

function ProductoItem(){
    return(
        <Fragment>
            <li className="productoItem">
                <Link className="productosItemLink">
                    <figure>
                        <img  src="/" alt="producto THSCREEN"
                        className="productoImagen"/>
                    </figure>
                    <div>
                        
                    </div>
                </Link>
            </li>

        </Fragment>
    )
}

export default ProductoItem;