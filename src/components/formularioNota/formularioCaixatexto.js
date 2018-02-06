// param destructuring
function FormularioCaixatexto({ value, readonly }) {
    let input = document.createElement('input');

    input.setAttribute('class', 'note__title')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'titulo')
    input.setAttribute('placeholder', 'Título')
    input.setAttribute('autofocus', true)
    input.setAttribute('value', value);

    if (readonly) {
        input.setAttribute('readonly', readonly);
    }

    return input;
}

export default FormularioCaixatexto;