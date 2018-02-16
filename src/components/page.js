import React from 'react'
import Nota from '../nota'
import FormNotas from './formNotas'
import SecaoNotas from './secaoNotas'
import ListaNotas from '../listaNotas'

function montaFormNotas(adicionarNota, removerNota, editarFormulario) { // Nao precisa chamar o Nota
    const props = {
        posicao: null,
        notaAtual: new Nota('', ''),
        adicionarNota,
        removerNota,
        editarFormulario,
    }
    return React.createElement(FormNotas, props)
}

function montaSecaoNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    props = {
        listaNotas,
        adicionarNota,
        removerNota,
        editarFormulario,
    }

    return React.createElement(SecaoNotas, props)
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.atualizaPagina = this.atualizaPagina.bind(this);
        this.state = {
            listaNotas: new ListaNotas(this.atualizaPagina)
        }
    }

    atualizaPagina(novaLista) {
        this.setState({
            listaNotas: novaLista
        })

    }

    editarFormulario (posicao) {
        this.state.listaNotas.edita(posicao);
    }

    adicionarNota (inputTitulo, textareaTexto, formulario, posicao) {
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
        } else {
            this.state.listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
            formulario.reset();
        }
    }

    removerNota (evento, posicao) {
        evento.stopPropagation();
        this.state.listaNotas.remove(posicao);
    }

    render() {
    const props = { className: 'container' }
    let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
    let SecaoNotas = montaSecaoNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)
    const children = [formNotas, SecaoNotas]

    return React.createElement('main', props, children)
}
}

export default Page;