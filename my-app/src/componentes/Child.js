import React, { Component } from 'react';

class Child extends Component {

    Alteracao = () => {
        this.props.funcao("Este é o nome alterado!!!");
    }

    render() {
        return (
            <div>
                <h3>Child component</h3>
                <button onClick={this.Alteracao}>Alterar</button>
            </div>
        );
    }
}

export default Child;