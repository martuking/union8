import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Grua from '../views/Gruas';
import Persona from '../views/Personas';
import Home from '../views/Home';
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/personas" component={Persona} />
          <Route path="/gruas" component={Grua} />
        </Switch>
      </BrowserRouter>
        );
      }
    }
    
    export default App;
