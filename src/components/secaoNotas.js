import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

function criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        key: posicao,
        posicao: posicao,
        notaAtual: listaNotas.pega(posicao),
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editarFormulario: editarFormulario,
    }
    return <FormNotas {...props}/>
}


function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) { // destructuring
    const props = { className: 'notes' };

    // for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
    //     const props = {
    //         className: 'notes',
    //     }

    //     let formNotas = criaFormNotas(posicao, props);
    //     children.push(formNotas);
    // }

    return (
        <Section {...props}>
            {listaNotas.pegaTodos().map((notaAtual, posicao) => criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario))
            }
        </Section>
    )
}
export default SecaoNotas;

