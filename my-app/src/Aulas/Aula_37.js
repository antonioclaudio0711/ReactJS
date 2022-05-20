import React from 'react';
import Nome from '../componentes/Nome';
import Sobrenome from '../componentes/Sobrenome';

class App extends React.Component {
  render(){
    return(
      <div>
        <p><b>Componente principal</b></p>
        <Nome />
        <Sobrenome/>
      </div>
    )
  }
}

export default App;