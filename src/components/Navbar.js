import React,{Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    //Estado para Click MENU
    const[click,setClick] = useState(false);   
    //Estado para setear Boton segun pantalla
    const [button,setButton] = useState(true);

    //Si hace click se tea click diferente al estado en el que esta haciendo un toggle de encendido y apgado
    const clickMenu = () => setClick(!click);
    
    //Setea en falso el click MENU para cerrar el menu en mobile
    const cerrarMenuMobile = () => setClick(false);

    //funcion mostrar el boton donde compara el size de la pantalla 
    const mostrarBotton = () =>{
        //si es menor o igual a 960px
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    //Guarda el Estado
    useEffect(() => {
        mostrarBotton(); 
    }, [])
    //añade un listener al tamaño de la pantalla para ver si mostar o no los botones en mobil
    window.addEventListener('resize',mostrarBotton);


    return (
       <Fragment>
           <nav className="navbar">
               <div className="navbar-container">                   
                   <Link to="/" className="navbar-logo" onClick={cerrarMenuMobile}>
                       <img src="images/logotlt.png" height="70px"/>                       
                   </Link>

                   <div className='menu-icon' onClick={clickMenu}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                   </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={cerrarMenuMobile}> Inicio </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/productos' className='nav-links' onClick={cerrarMenuMobile}> Productos </Link>
                        </li>                       
                        <li className='nav-item'>
                            <a href='https://drive.google.com/file/d/1yA4JmTbEa9Sc-UqwKvAge1DChGFvQPwM/view?usp=sharing' className='nav-links' onClick={cerrarMenuMobile}> Lista de Precios </a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacto' className='nav-links' onClick={cerrarMenuMobile}> Contacto </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'> IR </Button>} */}

               </div>

           </nav>
       </Fragment>
    )
}

export default Navbar
