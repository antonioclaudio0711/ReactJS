import React from 'react';
import Navegacao from '../componentes/Navegacao';
import Home from '../componentes/Home';
import Servicos from '../componentes/Servicos';
import Contatos from '../componentes/Contatos';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navegacao />

      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/servicos' element={<Servicos />}></Route>
          <Route path='/contatos' element={<Contatos />}></Route>
      </Routes>
        
        </div>
      </Router>
    )
  }
}

export default App;