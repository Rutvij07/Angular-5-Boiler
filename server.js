const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

const mongoose = require('mongoose');

const api = require('./server/routes/api');
const auth = require('./server/routes/auth');


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Api routes
app.use('/api',api);
app.use('/auth',auth);

// Angular 4 DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
