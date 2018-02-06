// param destructuring
function FormularioAreatexto({ readonly }, children) {
    let textarea = document.createElement('textarea');

    textarea.setAttribute('class', 'note__body')
    textarea.setAttribute('name', 'texto')
    textarea.setAttribute('placeholder', 'Criar uma nota...')
    textarea.setAttribute('rows', '5');

    if (readonly) {
        textarea.setAttribute('readonly', readonly);
    }

    textarea.innerHTML = children;

    return textarea;
}

export default FormularioAreatexto;