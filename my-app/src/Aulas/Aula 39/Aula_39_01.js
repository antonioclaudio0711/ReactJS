import React from 'react';
import Child from '../../componentes/Child';

class App extends React.Component {

  state = {
    nome: "Antônio Claudio"
  }

  Alteracao = (evento) => {
    this.setState({nome: "Antônio Claudio Ferreira Filho"})
  }

  render(){
    return(
      <div>
        <h3>Parent component</h3>
        <button onClick={this.Alteracao}>Alterar</button>
        <hr></hr>

        <Child nome = {this.state.nome}/>

      </div>
    )
  }
}

export default App;