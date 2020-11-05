import React from 'react';
import { Button } from './Button';
import './Slider.css';
import '../App.css';

function Slider() {
    return (
        <div className='Slider-Container'>
            <h1>TH SCREEN</h1>
            <p>Pantallas Portafolios</p>            
        
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
