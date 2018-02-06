import FormularioNota from '../formularioNota/formularioNota.js';


function SecaoNotas(listaNotas) {
    let secaoNotas = document.createElement('section');
    secaoNotas.setAttribute('class', 'notes');

    const conclui = (e, posicao) => {
        let formulario = e.target.form;
        let titulo = formulario.titulo.value;
        let texto = formulario.texto.value;

        if (posicao !== null && posicao > -1) {
            listaNotas.salva(posicao, titulo, texto);
        } else {
            listaNotas.adiciona(titulo, texto);
            formulario.reset();
        }
    }

    const edita = posicao => listaNotas.edita(posicao);

    const remove = (e, posicao) => {
        e.stopPropagation();
        listaNotas.remove(posicao);
    }

    // diferenca programacao funcional/declarativa
    listaNotas.pegaTodos().forEach(nota => (
        secaoNotas.appendChild(
            new FormularioNota({ nota, edita, conclui, remove })
        )
    ));

    return secaoNotas;
}

export default SecaoNotas;