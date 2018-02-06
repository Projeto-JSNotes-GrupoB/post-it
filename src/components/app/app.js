import Nota from '../listaNotas/nota.js';
import FormularioNota from '../formularioNota/formularioNota.js';
import SecaoNotas from '../secaoNotas/secaoNotas.js';
import ListaNotas from '../listaNotas/listaNotas';
import './app.css';


function App () {
    let container = document.createElement('main');
    container.setAttribute('class', 'container');

    let listaNotas;

    const observador = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        let secaoNotas = new SecaoNotas(listaNotas);

        let formularioNota = new FormularioNota({
            nota: new Nota(null, "", ""),
            conclui: e => {
                let formulario = e.target.form;
                let titulo = formulario.titulo.value;
                let texto = formulario.texto.value;

                listaNotas.adiciona(titulo, texto);
                formulario.reset();
            }
        });

        container.appendChild(formularioNota);
        container.appendChild(secaoNotas);
    }

    listaNotas = new ListaNotas(observador);
    
    observador();

    return container;
}

export default App;