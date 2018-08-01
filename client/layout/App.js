import React, { Component } from 'react';
import {Route}  from 'react-router-dom';
import HomePage from '../views/HomePage';
import HomeBar from '../components/HomeBar';

import GruaList from '../views/GruaList';
import GruaCreate from '../views/GruaCreate';
import GruaShow from '../views/GruaShow';
import GruaEdit from '../views/GruaEdit';
import GruaDelete from '../views/GruaDelete';

import PersonaList from '../views/PersonaList';
import PersonaCreate from '../views/PersonaCreate';
import PersonaShow from '../views/PersonaShow';
import PersonaEdit from '../views/PersonaEdit';
import PersonaDelete from '../views/PersonaDelete';

import ClientesList from '../views/ClienteList';
import ClienteCreate from '../views/ClienteCreate';
import ClienteShow from '../views/ClienteShow';
import ClienteEdit from '../views/ClienteEdit';
import ClienteDelete from '../views/ClienteDelete';


class App extends Component {
  render() {
    return (
      <div>
        <HomeBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gruas" component={GruaList} />
          <Route exact path="/gruasCreate" component={GruaCreate} />
          <Route exact path="/gruas/:id" component={GruaShow} />
          <Route exact path="/gruas/:id/edit" component={GruaEdit} />
          <Route exact path="/gruas/:id/delete" component={GruaDelete} />
          
          <Route exact path="/personas" component={PersonaList} />
          <Route exact path="/personasCreate" component={PersonaCreate} />
          <Route exact path="/personas/:id" component={PersonaShow} />
          <Route exact path="/personas/:id/edit" component={PersonaEdit} />
          <Route exact path="/personas/:id/delete" component={PersonaDelete} />
          
          <Route exact path="/clientes" component={ClientesList} />
          <Route exact path="/clientesCreate" component={ClienteCreate} />
          <Route exact path="/clientes/:id" component={ClienteShow} />
          <Route exact path="/clientes/:id/edit" component={ClienteEdit} />
          <Route exact path="/clientes/:id/delete" component={ClienteDelete} />
          
      </div>
    );
  }
}

export default App;