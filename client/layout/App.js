import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import HomeBar from '../components/HomeBar';
import GruaList from '../views/GruaList';
import GruaCreate from '../views/GruaCreate';
import GruaDetail from '../views/GruaDetail';
import PersonaList from '../views/PersonaList';
import PersonaCreate from '../views/PersonaCreate';
import ClientesList from '../views/ClienteList';
import ClienteCreate from '../views/ClienteCreate';

class App extends Component {
  render() {
    return (
      <div>
        <HomeBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/personas" component={PersonaList} />
            <Route exact path="/personasCreate" component={PersonaCreate} />
            <Route exact path="/gruas" component={GruaList} />
            <Route exact path="/gruasCreate" component={GruaCreate} />
            <Route exact path="/gruas/:id" component={GruaDetail} />
            <Route exact path="/clientes" component={ClientesList} />
            <Route exact path="/clientesCreate" component={ClienteCreate} />
          </Switch>
      </div>
    );
  }
}

export default App;