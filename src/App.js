import React from 'react'

import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom'

import Header from './components/Header' 
import Home from './components/Home'
import Generos from './components/Generos'
import NovoGenero from './components/NovoGenero'
import EditarGenero from './components/EditarGenero'
import Livros from './components/Livros'
import NovoLivro from './components/NovoLivro'
import InfoLivro from './components/InfoLivro'

function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/generos' exact component={Generos}/>
          <Route path='/generos/novo' exact component={NovoGenero}/>
          <Route path='/generos/:id' component={EditarGenero}/>
          <Route path='/livros' exact component={Livros}/>
          <Route path='/livros/novo' exact component={NovoLivro}/>
          <Route path='/livros/:id' component={InfoLivro}/>
        </Switch>        
      </Router>      
    </div>
  );
}

export default App;