import React from 'react';
import { Button } from './Button';
import './Slider.css';
import '../App.css';

function Slider() {
    return (
        <div className='Slider-Container'>
            <img className='logoslider' src='images/logotlt.png' />
            <h4>Soluciones Tecnoeducativas y para Empresas</h4>    
            <p>Convertimos en Táctil Pantallas, Pizarrones</p>
            <p> Rotafolios o cualquier superficie. </p>        
        
                <div className='Slide-btn'>
                    <Button
                    className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn-large'
                    >
                        CONTACTARME
                    </Button>

                </div>
        </div>
    );
}

export default Slider
