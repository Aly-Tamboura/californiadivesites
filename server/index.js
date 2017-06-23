const path = require('path');
const express = require('express');

const app = express();
const port = process.ENV || 3100;

app.use(express.static('client'))

app.listen(port, function (argument) {
	console.log('diving app running on port', port);
})