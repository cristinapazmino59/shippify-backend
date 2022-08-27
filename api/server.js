const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./db');
const models = require('./models');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

db.sync ({ force: false})
.then (( ) => { 
    app.listen (3001, ( ) => console.log ('Server up'))
})
.catch(err => console.log(err));
