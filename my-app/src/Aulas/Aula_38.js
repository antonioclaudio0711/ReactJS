import React from 'react';
import Identificacao from '../componentes/Identificacao';

class App extends React.Component {

  state = {
    nome: "Antônio Claudio",
    sobrenome: "Ferreira Filho",
  }

  render(){
    return(
      <div>
        <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome}/>
      </div>
    )
  }
}

export default App;