'use strict';

require('dotenv').config();

const app =  require('./app');

require('./database');

async function serverInit(){
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
}

serverInit();