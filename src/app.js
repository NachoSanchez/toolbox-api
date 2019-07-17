'use strict';

const express = require('express');
const cors = require('cors');
const app= express();

//Configuraciones
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api', require('./routes/texts'));


module.exports = app;