import React, { Component } from 'react';

class Identificacao extends Component {

    render() {
        return (
            <div>
                <p><b>Nome:</b> {this.props.nome}</p>
                <p><b>Sobrenome:</b> {this.props.sobrenome}</p>
            </div>
        );
    }
}

export default Identificacao;