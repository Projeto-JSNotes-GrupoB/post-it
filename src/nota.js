export default class Nota {
    constructor(novaPosicao, novoTitulo, novoTexto) {
        this._posicao = novaPosicao;
        this._titulo = novoTitulo;
        this._texto = novoTexto ;
        this._editando = false;
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

    renderiza() {
        let template;

        console.log("this._editando", this._editando);
       
        if (this._editando) {
            template = `<form class="note">
                            <input class="note__title" type="text" name="titulo" value="${this._titulo}" placeholder="Título">
                            <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${this._texto}</textarea>
                            <button class="note__control" type="button" onclick="adicionarNota(this.form, this.form.titulo, this.form.texto, ${this._posicao})">
                                Concluído
                            </button>
                        </form>`;
        } else {
            template = `<form class="note" onclick="editaFormulario(${this._posicao})">
                            <button class="note__control" type="button" onclick="removerNota(event, ${this._posicao})">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <h1 class="note__title">${this._titulo}</h1>
                            <p class="note__body">${this._texto}</p>
                        </form>`;
        }

        return template;
    }
}