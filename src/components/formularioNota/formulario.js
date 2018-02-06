import FormularioCaixatexto from './formularioCaixatexto.js';
import FormularioAreatexto from './formularioAreatexto.js';
import FormularioBotao from './formularioBotao.js';


// rest operator
// function Formulario(click, ...children) {
function Formulario({ click }, children) {
    let form = document.createElement('form');
    form.setAttribute('class', 'note');

    // declarative x imperative
    // for (let i = 0; i < children.lenght; i++) { form.appendChild(children[0]) }
    children.forEach(child => form.appendChild(child));
    
    if (click) {
        form.addEventListener('click', click);
    }

    return form;
}

Formulario.Caixatexto = FormularioCaixatexto;
Formulario.Areatexto = FormularioAreatexto;
Formulario.Botao = FormularioBotao;

export default Formulario;