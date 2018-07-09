const express = require('express');
// morgan: usa para ver lo que el usuario pide, por la consola
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

// ==========  Settings  ==========
// setea el puerto dado por el OS de la nube, sino utiliza el port 3000
app.set('port', process.env.PORT || 3000);


// ==========  Middleware  ==========
app.use(morgan('dev'));
app.use(express.json());




// ==========  Routes  ==========
app.use('/api/employees', require('./routes/employee.routes'));

// ==========  Starting the server  ==========
app.listen(app.get('port'), () =>{
    console.log(`Server listening on port ${app.get('port')}`);
});