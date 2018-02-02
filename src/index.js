import SecaoPostit from './secaoPostit.js';

let tag = document.getElementsByClassName("notes")[0];
const secaoPostit = new SecaoPostit(tag);

window.editaFormulario = posicao => secaoPostit.edita(posicao);

window.adicionarNota = (formulario, inputTitulo, textareaTexto, posicao) => {
    let titulo = inputTitulo.value, texto = textareaTexto.value;
    
    if (posicao !== null && posicao > -1) {
        secaoPostit.salva(posicao, titulo, texto);
    } else {
        secaoPostit.adiciona(titulo, texto);
        formulario.reset();
    }
}

window.removerNota = (evento, posicao) => {
    evento.stopPropagation();
    secaoPostit.remove(posicao);
}