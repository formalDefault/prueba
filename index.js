const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database');
var cors = require('cors'); 
app.use(cors());

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/system', require('./routes/api-routes'));

//star server 
app.listen(app.get('port'), () => {
    console.log(`servidor backend ${app.get('port')} iniciado`);
}); 