import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Productos from './components/pages/Productos';
import ListaPrecios from './components/pages/ListaPrecios';
import Contacto from './components/pages/Contacto';
import TableroDigital from './components/pages/TableroDigital';
import Rotafolio from './components/pages/Rotafolio';
import PantallaTactil from './components/pages/PantallaTactil';
import PizarronFijo from './components/pages/PizarronFijo';
import PizarronDigitalMovil from './components/pages/PizarronDigitalMovil';
import MesaInteractiva from './components/pages/MesaInteractiva'
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/Productos' exact component={Productos} />
            <Route exact path='/Lista-de-Precios' render={()=>(window.open = "https://docs.google.com/spreadsheets/d/1kgiaa9-W2RSO9kGq7oohljOYZ1MAl4ZIdNWbR5ch_pU/edit#gid=0","_blanck")}/>  
            <Route path='/Contacto' exact component={Contacto} />
            <Route path='/Tablero-Digital' exact component={TableroDigital}/>
            <Route path='/Rotafolio-thscreen' exact component={Rotafolio}/>
            <Route path='/Pantalla-Tactil' exact component={PantallaTactil}/>
            <Route path='/Pizarron-Digital' exact component={PizarronFijo}/>
            <Route path='/Pizarron-Digital-movil' exact component={PizarronDigitalMovil}/>
            <Route path='/Mesa-Interactiva' exact component={MesaInteractiva}/>
          </Switch>
      <Footer/>
      </Router>
    </Fragment>
    
  );
}

export default App;
