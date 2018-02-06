function FormularioBotao({ click }, children) {
    let button = document.createElement('button');
    
    button.setAttribute('class', 'note__control');
    button.setAttribute('type', 'button');
    button.addEventListener('click', click);

    button.innerHTML = children;
    
    return button;
}

export default FormularioBotao;