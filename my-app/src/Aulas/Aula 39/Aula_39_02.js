import React from 'react';
import Child from '../../componentes/Child';

class App extends React.Component {

  state = {
    nome: "Antônio Claudio"
  }

  Alteracao = (novonome) => {
  this.setState({nome: novonome})
  }

  render(){
    return(
      <div>
        <h3>Parent component</h3>
        <p><b>Nome:</b> {this.state.nome}</p>
        <hr></hr>

        <Child funcao = {this.Alteracao} />
      </div>
    )
  }
}

export default App;