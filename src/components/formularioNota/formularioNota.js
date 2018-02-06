// estabelecer dependência de componentes
// import FormularioCaixatexto from './formularioCaixatexto.js';
// import FormularioAreatexto from './formularioAreatexto.js';
// import FormularioBotao from './formularioBotao.js';
import Formulario from './formulario.js';
import './formularioNota.css';


function botaoRemover(propriedades) {
    const { remove, nota } = propriedades;
    let click = event => remove(event, nota.posicao);
    let children = '<i class="fa fa-times" aria-hidden="true">'; // children simples
    return new Formulario.Botao({ click }, children);
}

function caixaTitulo(propriedades) {
    const { nota } = propriedades;
    return new Formulario.Caixatexto({ value: nota.titulo, readonly: !nota.editando });
}

function areaTexto(propriedades) {
    const { nota } = propriedades;
    let children = nota.texto;
    return new Formulario.Areatexto({ readonly: !nota.editando }, children);
}

function botaoConcluido(propriedades) {
    const { conclui, nota } = propriedades;
    const click = event => conclui(event, nota.posicao);
    let children = 'Concluído';
    return new Formulario.Botao({ click }, children);
}

// funcao contrutora, componente funcional
function FormularioNota(propriedades) {
    const { nota, edita } = propriedades;
    
    let click = nota.editando ? null : () => edita(nota.posicao);
    let children = [];

    if (nota.posicao && nota.editando) {
        children.push(botaoRemover(propriedades));
    }

    children.push(caixaTitulo(propriedades));
    children.push(areaTexto(propriedades));
    children.push(botaoConcluido(propriedades));
    
    return new Formulario({ click }, children); // children array
}

export default FormularioNota;