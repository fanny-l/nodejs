require('dotenv').config();

const express   = require('express');
const morgan    = require('morgan'); // systeme de log
const cors      = require('cors');
const helmet    = require('helmet');

const connectDB     = require('./middlewares/connectDB');
const notFound      = require('./middlewares/notFound');
const errorHandler  = require('./middlewares/errorHandler');

connectDB();

const routesTws = require('./routes/tw');

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());

// création d'une route
server.get('/', (req, res) => {
    res.status(200).send("<h1>It works!</h1>");
});

server.use('/', routesTws);
server.use(notFound);
server.use(errorHandler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
    console.log(`Server écoute à l'adresse : http://${process.env.URL}:${PORT}`);
})