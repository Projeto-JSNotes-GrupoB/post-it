import React from 'react'
import ListaNotas from '../listaNotas'
import Section from './section'
import FormNotas from './formNotas'

function criaFormNotas(posicao, listaNotas, formNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        posicao: posicao,
        notaAtual: listaNotas.pega(posicao),
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editarFormulario: editarFormulario,
    }
    return React.createElement(FormNotas, props)
}


function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) { // destructuring
    const props = { className: 'notes' };
    
    // for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
    //     const props = {
    //         className: 'notes',
    //     }

    //     let formNotas = criaFormNotas(posicao, props);
    //     children.push(formNotas);
    // }

    let children = props.listaNotas.map((notaAtual, posicao) => criarFormNotas(posicao, listaNotas, formNotas, adicionarNota, removerNota, editarFormulario));

    return React.createElement(Section, props, children)
}
export default SecaoNotas;

