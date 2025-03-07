const express = require('express');
const app = express();
const path = require('path');

// Configuração para usar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Dados dos eventos
const eventos = [
    { evento: 'Evento 1', bairro: 'Centro', latitude: -22.9248, longitude: -45.4613 },
    { evento: 'Evento 2', bairro: 'Moreira César', latitude: -22.9280, longitude: -45.4650 },
    { evento: 'Evento 3', bairro: 'Santa Luzia', latitude: -22.9400, longitude: -45.4530 }
];
console.log(eventos);

// Rota principal
app.get('/', (req, res) => {
    res.render('index', { eventos });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
