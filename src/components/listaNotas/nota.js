export default class Nota {
    constructor(novaPosicao, novoTitulo, novoTexto) {
        this._posicao = novaPosicao;
        this._titulo = novoTitulo;
        this._texto = novoTexto ;
        this._editando = novaPosicao ? false : true;
    }

    get titulo() {
        return this._texto;
    }

    set titulo(tituloAlterado) {
        this._titulo = tituloAlterado;
    }

    get texto() {
        return this._texto;
    }

    set texto(textoAlterado) {
        this._texto = textoAlterado;
    }

    get editando() {
        return this._editando;
    }

    set editando(editandoAlterado) {
        this._editando = editandoAlterado;
    }

    get posicao() {
        return this._posicao;
    }

    set posicao(posicaoAlterada) {
        this._posicao = posicaoAlterada;
    }
}