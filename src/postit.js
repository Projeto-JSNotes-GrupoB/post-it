// herdar de Componente
class Postit {
    constructor(nota) {
        this._nota = nota;
    }

    renderiza() {
        let template;
       
        if (this._nota.editando) {
            template = `<form class="note">
                            <input class="note__title" type="text" name="titulo" value="${this._nota.titulo}" placeholder="Título">
                            <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${this._nota.texto}</textarea>
                            <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${this._nota.posicao})">
                                Concluído
                            </button>
                        </form>`;
        } else {
            template = `<form class="note" onclick="editaFormulario(${this._nota.posicao})">
                            <button class="note__control" type="button" onclick="removerNota(event, ${this._nota.posicao})">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <h1 class="note__title">${this._nota.titulo}</h1>
                            <p class="note__body">${this._nota.texto}</p>
                        </form>`;
        }

        return template;
    }
}