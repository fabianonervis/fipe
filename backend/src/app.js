const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

app.use(cors({
    origin : '*',
    optionsSuccessStatus : 200,
    methods : ['GET', 'POST', 'PUT']
})); 
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);