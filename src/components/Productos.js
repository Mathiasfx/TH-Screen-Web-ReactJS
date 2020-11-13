import React, { Fragment } from "react";
import ProductoItem from "./ProductoItem";
import "./Productos.css";
import { Button } from "./Button";


function Productos() {
  return (
    <Fragment>
      <div className="productos">
        <h2>Nuestras Soluciones</h2>
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
              <ProductoItem
                src="images/pizarron-pared-thscreen.jpg"
                text="Pizarron Digital"
                path="Pizarron-Digital"
              />
            </ul>
          </div>
        </div>
       
        <div className="productos__container">
          <div className="productos__wrapper">
            <ul className="productos__items">
              <ProductoItem
                src="images/pantalla-thscreen.jpg"
                text="Pantalla Táctil"                
                path="Pantalla-Tactil"
              />
              <ProductoItem
                src="images/totem-thscreen.jpg"
                text="Totem Interactivo"               
                path="Totem-Interactivo"
              />
              <ProductoItem
                src="images/mesa-thscreen.jpg"
                text="Mesa Interactiva"                
                path="Mesa-Interactiva"
              />           
              <ProductoItem
                src="images/caja-herramientas.jpg"
                text="Trabajos a Medida"                
                path="Trabajos-a-medida"
              />   
            </ul>
          </div>
        </div>
        <div className="product-btn">
          <Button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="Productos"
          >            
            VER MAS
          </Button>
        </div>
       

        

       
        

        <h2>Kits Creativos TH para el Docente y los Alumnos</h2>

        <ul className="productos__items">
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
          <ProductoItem
            src="images/thbot3.jpg"
            text="KIT TH Para el Docente Digital"           
            path="KIT TH Para el Docente Digital"
          />
        </ul>
      </div>
    </Fragment>
  );
}

export default Productos;
