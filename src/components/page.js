import React from 'react'
import Nota from '../nota'
import FormNotas from './formNotas'
import SecaoNotas from './secaoNotas'
import ListaNotas from '../listaNotas'

function montaFormNotas(adicionarNota, removerNota, editarFormulario) { // Nao precisa chamar o Nota
    const props = {
        key: 'form-note',
        posicao: null,
        notaAtual: new Nota('', ''),
        adicionarNota,
        removerNota,
        editarFormulario,
    }
    return React.createElement(FormNotas, props)
}

function montaSecaoNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {

    const props = {
        key: 'section-notes',
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
        this.editarFormulario = this.editarFormulario.bind(this);
        this.adicionarNota = this.adicionarNota.bind(this);
        this.removerNota = this.removerNota.bind(this);
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

    adicionarNota (titulo, texto, formulario, posicao) {
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, titulo, texto);
        } else {
            this.state.listaNotas.adiciona(titulo, texto);
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
    let secaoNotas = montaSecaoNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)
  
    return (
        <main {...props}>
            {formNotas}
            {secaoNotas}
        </main>
    )
}
}

export default Page;