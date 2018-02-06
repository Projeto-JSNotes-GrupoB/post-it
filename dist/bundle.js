/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nota = function () {
    function Nota(novaPosicao, novoTitulo, novoTexto) {
        _classCallCheck(this, Nota);

        this._posicao = novaPosicao;
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = novaPosicao ? false : true;
    }

    _createClass(Nota, [{
        key: "titulo",
        get: function get() {
            return this._texto;
        },
        set: function set(tituloAlterado) {
            this._titulo = tituloAlterado;
        }
    }, {
        key: "texto",
        get: function get() {
            return this._texto;
        },
        set: function set(textoAlterado) {
            this._texto = textoAlterado;
        }
    }, {
        key: "editando",
        get: function get() {
            return this._editando;
        },
        set: function set(editandoAlterado) {
            this._editando = editandoAlterado;
        }
    }, {
        key: "posicao",
        get: function get() {
            return this._posicao;
        },
        set: function set(posicaoAlterada) {
            this._posicao = posicaoAlterada;
        }
    }]);

    return Nota;
}();

exports.default = Nota;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formulario = __webpack_require__(6);

var _formulario2 = _interopRequireDefault(_formulario);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function botaoRemover(propriedades) {
    var remove = propriedades.remove,
        nota = propriedades.nota;

    var click = function click(event) {
        return remove(event, nota.posicao);
    };
    var children = '<i class="fa fa-times" aria-hidden="true">'; // children simples
    return new _formulario2.default.Botao({ click: click }, children);
} // estabelecer dependência de componentes
// import FormularioCaixatexto from './formularioCaixatexto.js';
// import FormularioAreatexto from './formularioAreatexto.js';
// import FormularioBotao from './formularioBotao.js';


function caixaTitulo(propriedades) {
    var nota = propriedades.nota;

    return new _formulario2.default.Caixatexto({ value: nota.titulo, readonly: !nota.editando });
}

function areaTexto(propriedades) {
    var nota = propriedades.nota;

    var children = nota.texto;
    return new _formulario2.default.Areatexto({ readonly: !nota.editando }, children);
}

function botaoConcluido(propriedades) {
    var conclui = propriedades.conclui,
        nota = propriedades.nota;

    var click = function click(event) {
        return conclui(event, nota.posicao);
    };
    var children = 'Concluído';
    return new _formulario2.default.Botao({ click: click }, children);
}

// funcao contrutora, componente funcional
function FormularioNota(propriedades) {
    var nota = propriedades.nota,
        edita = propriedades.edita;


    var click = nota.editando ? null : function () {
        return edita(nota.posicao);
    };
    var children = [];

    if (nota.posicao && nota.editando) {
        children.push(botaoRemover(propriedades));
    }

    children.push(caixaTitulo(propriedades));
    children.push(areaTexto(propriedades));
    children.push(botaoConcluido(propriedades));

    return new _formulario2.default({ click: click }, children); // children array
}

exports.default = FormularioNota;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nota = __webpack_require__(0);

var _nota2 = _interopRequireDefault(_nota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// herdar x compor de Array
var ListaNotas = function () {
    function ListaNotas() {
        _classCallCheck(this, ListaNotas);

        this._observador = function () {};
        this.listaInterna = [];
    }

    _createClass(ListaNotas, [{
        key: 'adiciona',
        value: function adiciona(titulo, texto) {
            var nota = new _nota2.default(this.contaTotal(), titulo, texto);
            this.listaInterna.push(nota);
            this._observador();
        }
    }, {
        key: 'remove',
        value: function remove(posicao) {
            this.listaInterna.splice(posicao, 1);
            this._observador();
        }
    }, {
        key: 'edita',
        value: function edita(posicao) {
            // metodo inicializa edicao
            this.listaInterna[posicao].editando = true;
            this._observador();
        }
    }, {
        key: 'salva',
        value: function salva(posicao, novoTitulo, novoTexto) {
            // metodo finaliza edicao
            this.listaInterna[posicao].titulo = novoTitulo;
            this.listaInterna[posicao].texto = novoTexto;
            this.listaInterna[posicao].editando = false;
            this._observador();
        }
    }, {
        key: 'pega',
        value: function pega(posicao) {
            return this.listaInterna[posicao];
        }
    }, {
        key: 'contaTotal',
        value: function contaTotal() {
            return this.listaInterna.length;
        }
    }, {
        key: 'observador',
        set: function set(novoObservador) {
            this._observador == novoObservador;
        }
    }]);

    return ListaNotas;
}();

exports.default = ListaNotas;
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
(function webpackMissingModule() { throw new Error("Cannot find module \"js/scripts-refatorado.js\""); }());
(function webpackMissingModule() { throw new Error("Cannot find module \"lib/scripts-webpack.js\""); }());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.body;
body.insertBefore(new _app2.default(), body.firstChild);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nota = __webpack_require__(0);

var _nota2 = _interopRequireDefault(_nota);

var _formularioNota = __webpack_require__(1);

var _formularioNota2 = _interopRequireDefault(_formularioNota);

var _secaoNotas = __webpack_require__(10);

var _secaoNotas2 = _interopRequireDefault(_secaoNotas);

var _listaNotas2 = __webpack_require__(2);

var _listaNotas3 = _interopRequireDefault(_listaNotas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.renderiza = this.renderiza.bind(this);
        this._listaNotas = new _listaNotas3.default(this.renderiza());
    }

    _createClass(App, [{
        key: 'renderiza',
        value: function renderiza() {
            var _listaNotas = this._listaNotas;


            var container = document.createElement('main');
            container.setAttribute('class', 'container');

            var secaoNotas = new _secaoNotas2.default(_listaNotas);

            var formularioNota = new _formularioNota2.default({
                nota: new _nota2.default(null, "", ""),
                conclui: function conclui(e) {
                    var formulario = e.target.form;
                    var titulo = formulario.titulo.value;
                    var texto = formulario.texto.value;

                    _listaNotas.adiciona(titulo, texto);
                    formulario.reset();
                }
            });

            container.appendChild(formularioNota);
            container.appendChild(secaoNotas);

            return container;
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formularioCaixatexto = __webpack_require__(7);

var _formularioCaixatexto2 = _interopRequireDefault(_formularioCaixatexto);

var _formularioAreatexto = __webpack_require__(8);

var _formularioAreatexto2 = _interopRequireDefault(_formularioAreatexto);

var _formularioBotao = __webpack_require__(9);

var _formularioBotao2 = _interopRequireDefault(_formularioBotao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// rest operator
// function Formulario(click, ...children) {
function Formulario(_ref, children) {
    var click = _ref.click;

    var form = document.createElement('form');
    form.setAttribute('class', 'note');

    // declarative x imperative
    // for (let i = 0; i < children.lenght; i++) { form.appendChild(children[0]) }
    children.forEach(function (child) {
        return form.appendChild(child);
    });

    if (click) {
        form.addEventListener('click', click);
    }

    return form;
}

Formulario.Caixatexto = _formularioCaixatexto2.default;
Formulario.Areatexto = _formularioAreatexto2.default;
Formulario.Botao = _formularioBotao2.default;

exports.default = Formulario;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// param destructuring
function FormularioCaixatexto(_ref) {
    var value = _ref.value,
        readonly = _ref.readonly;

    var input = document.createElement('input');

    input.setAttribute('class', 'note__title');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'titulo');
    input.setAttribute('placeholder', 'Título');
    input.setAttribute('autofocus', true);
    input.setAttribute('value', value);

    if (readonly) {
        input.setAttribute('readonly', readonly);
    }

    return input;
}

exports.default = FormularioCaixatexto;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// param destructuring
function FormularioAreatexto(_ref, children) {
    var readonly = _ref.readonly;

    var textarea = document.createElement('textarea');

    textarea.setAttribute('class', 'note__body');
    textarea.setAttribute('name', 'texto');
    textarea.setAttribute('placeholder', 'Criar uma nota...');
    textarea.setAttribute('rows', '5');

    if (readonly) {
        textarea.setAttribute('readonly', readonly);
    }

    textarea.innerHTML = children;

    return textarea;
}

exports.default = FormularioAreatexto;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormularioBotao(_ref, children) {
    var click = _ref.click;

    var button = document.createElement('button');

    button.setAttribute('class', 'note__control');
    button.setAttribute('type', 'button');
    button.addEventListener('click', click);

    button.innerHTML = children;

    return button;
}

exports.default = FormularioBotao;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listaNotas = __webpack_require__(2);

var _listaNotas2 = _interopRequireDefault(_listaNotas);

var _formularioNota = __webpack_require__(1);

var _formularioNota2 = _interopRequireDefault(_formularioNota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SecaoNotas(listaNotas) {
    var secaoNotas = document.createElement('section');
    secaoNotas.setAttribute('class', 'notes');

    var conclui = function conclui(e, posicao) {
        var formulario = e.target.form;
        var titulo = formulario.titulo.value;
        var texto = formulario.texto.value;

        if (posicao !== null && posicao > -1) {
            listaNotas.salva(posicao, titulo, texto);
        } else {
            listaNotas.adiciona(titulo, texto);
            formulario.reset();
        }
    };

    var edita = function edita(posicao) {
        return listaNotas.edita(posicao);
    };

    var remove = function remove(e, posicao) {
        e.stopPropagation();
        listaNotas.remove(posicao);
    };

    // diferenca programacao funcional/declarativa
    this.listaNotas.listaInterna.forEach(function (nota) {
        return secaoNotas.appendChild(new _formularioNota2.default({ nota: nota, edita: edita, conclui: conclui, remove: remove }));
    });

    return secaoNotas;
}

/***/ })
/******/ ]);