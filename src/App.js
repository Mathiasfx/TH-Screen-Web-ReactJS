import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/pages/Inicio';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Inicio} />
          </Switch>
      </Router>
    </Fragment>
    
  );
}

export default App;
