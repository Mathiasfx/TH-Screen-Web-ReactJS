import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Productos from './components/pages/Productos';
import ListaPrecios from './components/pages/ListaPrecios';
import Contacto from './components/pages/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/Productos' exact component={Productos} />
            <Route path='/Lista-de-Precios' exact component={ListaPrecios} />
            <Route path='/Contacto' exact component={Contacto} />
          </Switch>
      <Footer/>
      </Router>
    </Fragment>
    
  );
}

export default App;
