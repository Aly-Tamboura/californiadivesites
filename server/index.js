const path = require('path');
const express = require('express');
const db = require('../db/index.js');

const app = express();
const port = process.ENV || 3100;

app.use(express.static('client'));

app.get('/', function() {
	console.log('fired')
})

app.listen(port, function (argument) {
	console.log('diving app running on port', port);
})