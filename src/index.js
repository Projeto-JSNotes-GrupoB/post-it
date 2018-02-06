import App from './components/app/app.js';


let body = document.body;
body.insertBefore(
    new App(), 
    body.firstChild
);