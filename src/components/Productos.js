import React from 'react'
import ProductoItem from './ProductoItem'
import './Productos.css'

function Productos() {
    return (
        <div className="Productos">
            <h2>Nuestras Soluciones</h2>
            <div className="ProductosContainer">
                <div className="ProductoWrapper">
                    <ul>
                        <ProductoItem/>
                    </ul>
                </div>
            </div>            
        </div>
    )
}

export default Productos
