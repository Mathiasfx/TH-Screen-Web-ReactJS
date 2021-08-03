import React from 'react';
import './CalltoAction.css';
import '../App.css';

function CalltoAction({titulo,subtitulo,contenido,logo}) {
    return (
        <div className='containerCall'>
        <section className='sectioncall'>
            <div className="background-container"> <span className="background-overlay"></span>
                <div className="background-cover container">
                    <div className="line-heading">
                        <div className="line-heading-left">
                            <h2>{titulo}</h2>
                            <h4>{subtitulo}</h4>
                            <img src={logo} alt='logo formosa software factory' height='70px'/>
                        </div>
                        <p>{contenido}</p>
                    </div>
                    
                </div>
            </div>
            
        </section >
        </div>
        


        
    )

}

export default CalltoAction
