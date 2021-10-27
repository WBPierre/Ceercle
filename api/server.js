'use strict';

const express = require('express');

const PORT = 8080;
const HOSTNAME = "0.0.0.0";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello testtest');
});

app.listen(PORT, HOSTNAME);

console.log('Running on '+HOSTNAME+':'+PORT);