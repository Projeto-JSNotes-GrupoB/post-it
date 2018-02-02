import ListaNotas from './listaNotas.js';

export default class SecaoPostit {
    constructor(tag) {
        this._tag = tag;
        // passar a funcao que renderiza como observador
        // cuidado com o this
        let observador = this.renderiza.bind(this);
        this._notas = new ListaNotas(observador);
    }

    adiciona(titulo, texto) {
        this._notas.adiciona(titulo, texto);
    }

    edita(posicao) {
        this._notas.edita(posicao);
    }

    salva(posicao, titulo, texto) {
        this._notas.salva(posicao, titulo, texto);
    }

    remove(posicao) {
        this._notas.remove(posicao);
    }

    renderiza() {
        // diferenca programacao funcional/declarativa
        let template = this._notas.listaInterna.reduce((conteudoAnterior, nota) => conteudoAnterior += nota.renderiza(), "");
        this._tag.innerHTML = template;
    }
}