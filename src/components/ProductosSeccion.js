import React, { Fragment } from 'react';
import './ProductosSeccion.css';
import ProductoItem from '../components/ProductoItem'



const ProductosSeccion = () => {
    return (
        <Fragment>
            <div className='Container-Seccion'>
                <h2>Nuestros Productos</h2>
                <div className="productos__container">
                    <div className="productos__wrapper">
                        <ul className="productos__items">
                            <ProductoItem
                                src="images/thscreenpizarra.jpg"
                                text="Tablero Digital"
                                path="Tablero-Digital"
                            />
                            <ProductoItem
                                src="images/rotafolio-thscreen.jpg"
                                text="Rotafolio 2 en 1"
                                path="Rotafolio-thscreen"
                            />
                            <ProductoItem
                                src="images/pizarron-thscreen.jpg"
                                text="Pizarron Digital Movil"
                                path="Pizarron-Digital-Movil"
                            />

                        </ul>
                    </div>
                </div>

                <div className="productos__container">
                    <div className="productos__wrapper">
                        <ul className="productos__items">
                            <ProductoItem
                                src="images/pizarron-pared-thscreen.jpg"
                                text="Pizarron Digital"
                                path="Pizarron-Digital"
                            />
                            <ProductoItem
                                src="images/pantalla-thscreen.jpg"
                                text="Pantalla Tactil"
                                path="Pantalla-Tactil"
                            />
                            <ProductoItem
                                src="images/totem-thscreen.jpg"
                                text="Totem Interactivo"
                                path="Totem-Interactivo"
                            />

                        </ul>
                    </div>
                </div>

                <div className="productos__container">
                    <div className="productos__wrapper">
                        <ul className="productos__items">
                            <ProductoItem
                                src="images/mesa-thscreen.jpg"
                                text="Mesa Interactiva"
                                path="Mesa-Interactiva"
                            />
                           
                            	<ProductoItem
                                src="images/thbot3D.jpg"
                                text="Kits TH-BOT"
                                path="Kits TH-BOT"
                            />
                             <ProductoItem
                                src="images/thbot2.jpg"
                                text="Kits TH-Creativo"
                                path="Kits TH-Creativo"
                            />



                        </ul>
                    </div>
                </div>
                <div className="productos__container">
                    <div className="productos__wrapper">
                        <ul className="productos__items">
                       
                             
                            <ProductoItem
                                src="images/thbot3.jpg"
                                text="KIT TH Docente"
                                path="KIT TH Docente"
                            />
                            
                            <ProductoItem
                                src="images/caja-herramientas.jpg"
                                text="Trabajos a Medida"
                                path="Trabajos-a-medida"
                            />



                        </ul>
                    </div>
                </div>
            </div>

        </Fragment>
    );

}

export default ProductosSeccion;