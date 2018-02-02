import Nota from './nota.js'

// herdar de Array
export default class ListaNotas {
    constructor(observador) {
        this.observador = observador;
        this.listaInterna = []
    }

    adiciona(novoTitulo, novoTexto) {
        let nota = new Nota(this.listaInterna.length, novoTitulo, novoTexto);
        this.listaInterna.push(nota);
        this.observador();
    }

    remove(posicao) {
        this.listaInterna.splice(posicao, 1);
        this.observador();
    }

    edita(posicao) {
        // metodo inicializa edicao
        console.log("chamou edita");
        this.listaInterna[posicao].editando = true;
        this.observador();
    }

    salva(posicao, novoTitulo, novoTexto) {
        // metodo finaliza edicao
        this.listaInterna[posicao].titulo = novoTitulo;
        this.listaInterna[posicao].texto = novoTexto;
        this.listaInterna[posicao].editando = false;
        this.observador();
    }

    pega(posicao) {
        return this.listaInterna[posicao];
    }

    contaTotal() {
        return this.listaInterna.length;
    }
};