import React from 'react'
import Nota from '../nota';
import Form from './form';
import FormInput from './formInput';
import FormTextarea from './formTextarea';
import FormButton from './formButton';


function criaInputTitulo(notaAlterada) {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    }
    return React.createElement(FormInput, props)
}


// const criaInputTitulo = ({ notaAtual }) => {
//     // immutable
//     const props = {
//         className: 'note__title',
//         type: 'text',
//         name: 'titulo',
//         placeholder: 'Título',
//         readonly: notaAtual.editando ? false : true,
//         value: notaAtual.titulo
//     };

//     return new FormInput(props);
// };

function criaTextareaTexto(notaAlterada) {
    // immutable
    const props = {
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readOnly: notaAlterada.editando ? false : true,
        defaultValue: notaAlterada.texto, //não precisa ser children para textarea
        onChange: (event) => {
            notaAlterada.titulo = event.target.value;
        }
    };

    return React.createElement(FormTextarea, props)
};

// const criaTextareaTexto = ({ notaAtual }) => {
//     // immutable
//     const props = {
//         className: 'note__body', 
//         name: 'texto', 
//         placeholder: 'Criar uma nota...', 
//         rows: 5, 
//         readonly: notaAtual.editando ? false : true,
//         children: notaAtual.texto
//     };

//     return new FormTextarea(props);
// };

function criaButtonConcluir(adicionarNota, posicao, notaAlterada, formNotas) {
    // immutable
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: () => adicionarNota(notaAlterada.titulo, notaAlterada.texto, formNotas, posicao)
    }
    const children = 'Concluído'
    }

    return React.createElement(FormButton, props, children)
};

// const criaButtonConcluir = ({ posicao, nota, adicionarNota, salvarNota }, inputTitulo, textareaTexto, formNotas) => {
//     // immutable
//     const props = {
//         className: 'note__control', 
//         type: 'button', 
//         children: 'Concluído',
//         click: () => adicionarNota(inputTitulo, textareaTexto, formNotas, posicao)
//     };

//     return new FormButton(props);
// };

function criaButtonRemover(posicao, removerNota) {
    // immutable
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => removerNota(event, posicao)
    };

    const children = React.createElement('i', {
        className: 'fa fa-times',
       'aria-hidden': true, 
        })
    };

    return React.createElement(FormButton, props);
};

// const criaButtonRemover = ({ posicao, removerNota}) => {
//     // immutable
//     const props = {
//         className: 'note__control', 
//         type: 'button', 
//         children: '<i class="fa fa-times" aria-hidden="true"></i>',
//         click: event => removerNota(event, posicao)
//     };

//     return new FormButton(props);
// };


// function FormNotas(propriedades) {
//     // destructuring
//     const { posicao, notaAtual, editarFormulario } = propriedades;

// let inputTitulo = criaInputTitulo(propriedades),
//     textareaTexto = criaTextareaTexto(propriedades),
//     buttonConcluido = criaButtonConcluir(propriedades, inputTitulo, textareaTexto, formNotas);
//     buttonRemover = criaButtonRemover(propriedades),inputTitulo, textareaTexto, buttonConcluido;

//     let props = {
//         className: 'note',
//         click: notaAtual.editando ? () => {} : () => editarFormulario(posicao),
//         children: [inputTitulo, textareaTexto, buttonConcluido]
//         // children: notaAtual.editando ? [criaButtonRemover(propriedades),inputTitulo, textareaTexto, buttonConcluido] : [inputTitulo, textareaTexto, buttonConcluido]
//     };

//     if (notaAtual.editando) {
//         let buttonRemover = criaButtonRemover(propriedades);
//         props.children = [buttonRemover].concat(props.children);
//     }

//     let formNotas = new Form(props);


function FormNotas(props) {
    let notaAlterada = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando)
    let inputTitulo = criaInputTitulo(notaAlterada);
    let textareaTexto = criaTextareaTexto(notaAlterada);
    let buttonConcluido = criaButtonConcluir(props.adicionarNota, props.posicao , notaAlterada, formNotas);
    let buttonRemover = criaButtonRemover(props.posicao, props.removerNota);


    let formProps = {
        className: 'note',
    };

    let children;
    let onClick;

    if (props.notaAtual = editando) {
        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]

    } else {
        children = [inputTitulo, textareaTexto]
    }

    formNotas = React.createElement(form, formProps, children);


    return formNotas;
}

export default FormNotas;