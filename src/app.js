import React from 'react';
import Nota from './nota';
import SectionNotas from './components/sectionNotas';


const criaSecaoNotas = () => {
    const props = {
        className: "notes"
    };
    
    return SectionNotas(props);
};

function App() {
    const props = {
        className: "container"
    };


    return React.createElement(
        "main",
        props,
        <SectionNotas className="notes" />
    );
}

export default App;