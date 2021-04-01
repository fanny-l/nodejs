require('dotenv').config();

const express = require('express');
const morgan = require('morgan'); // systeme de log
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

// création d'une route
server.patch('/', (req, res) => {
    res.status(200).send("<h1>It works!</h1>");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
    console.log(`Server écoute à l'adresse : http://${process.env.URL}:${PORT}`);
})