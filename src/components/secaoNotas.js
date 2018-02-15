import React from 'react'
import ListaNotas from '../listaNotas'
import Section from './section'
import FormNotas from './formNotas'

function criaFormNotas(listaNotas, posicao, removerNota, dicionarNota, editarFormulario) {
    const props = {
        posicao: posicao,
        notaAtual: listaNotas.pega(posicao),
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editarFormulario: editarFormulario,
    }
    return React.createElement(FormNotas, props)
}


function SecaoNotas({ listaNotas, formNotas, adicionarNota, removerNota, editarFormulario }) { // destructuring
    const props = { className: 'notes' };
    let children = [];

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        const props = {
            className: 'notes',
        }

        let formNotas = React.createElement(FormNotas, props);
        children.push(formNotas);
    }

    return React.createElement(Section, props, children)
}
export default SecaoNotas;

