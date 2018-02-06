import Nota from './nota.js';


// herdar x compor de Array
export default class ListaNotas {
    constructor(observador) {
        this._observador = observador;
        this._listaInterna = [];
    }

    adiciona(titulo, texto) {
        let nota = new Nota(this.contaTotal(), titulo, texto);
        this._listaInterna.push(nota);
        this._observador();
    }

    remove(posicao) {
        this._listaInterna.splice(posicao, 1);
        this._observador();
    }

    edita(posicao) {
        // metodo inicializa edicao
        this._listaInterna[posicao].editando = true;
        this._observador();
    }

    salva(posicao, novoTitulo, novoTexto) {
        // metodo finaliza edicao
        this._listaInterna[posicao].titulo = novoTitulo;
        this._listaInterna[posicao].texto = novoTexto;
        this._listaInterna[posicao].editando = false;
        this._observador();
    }

    pega(posicao) {
        return this._listaInterna[posicao];
    }

    pegaTodos() {
        return this._listaInterna;
    }

    contaTotal() {
        return this._listaInterna.length;
    }
};