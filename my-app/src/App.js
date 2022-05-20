import React, {useState} from 'react';

const App = () => {

  const [nome, setNome] = useState("Antônio Claudio")

  const Alterar_nome = () => setNome("Antônio Claudio Ferreira Filho")

  return(
    <div>
      <p>O meu nome é {nome}!</p>
      <button onClick={() => Alterar_nome()}>Alterar</button>
    </div>
  )
}

export default App;
