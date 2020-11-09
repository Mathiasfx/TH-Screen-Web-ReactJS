import React from 'react';
import { Button } from './Button';
import './Slider.css';
import '../App.css';

function Slider() {
    return (
        <div className='Slider-Container'>
            <img src='images/logotlt.png' />
            <p>Desarrollo de Soluciones Interactivas</p>            
        
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
