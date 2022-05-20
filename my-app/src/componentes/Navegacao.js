import React from 'react';
import "../App.css";
import {Link} from 'react-router-dom'

const Navegacao = () => {
    return(
        <div className="alinhamento">
            <Link to={"/"}>Home</Link>  ||
            <Link to={"/servicos"}>  Serviços</Link>  ||
            <Link to={"/contatos"}>Contatos</Link>
        </div>
    )
}

export default Navegacao;