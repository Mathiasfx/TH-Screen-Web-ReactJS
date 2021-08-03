import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


function ProductoItem({src,text,path}){
    return(
        <Fragment>
            <li className="productos__item">
                <Link className="productos__item__link" to={path}>
                    <figure className="productos__item__pic-wrap">
                        <img  
                        src={src} alt="producto THSCREEN"
                        className="productos__item__img"
                        />
                    </figure>
                    <div className="productos__item__info">
                        <h5 className="productos__item__text">{text}</h5>                        
                    </div>
                </Link>
            </li>

            

        </Fragment>
    )
}

export default ProductoItem;