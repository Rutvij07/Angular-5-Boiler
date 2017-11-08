const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');


const api = require('./server/routes/api');
const cookie = require('./server/routes/cookie');
const free = require('./server/routes/free');

//Set Cookie
app.use(session(
  {
    name: 'myName',
    secret: '#@$#!ng',
    resave: true,
    saveUninitialized: true,
    overwrite: true,
    rolling: true,
    "cookie": {
      maxAge: 1000 * 60 * 15000000
    },
    store: new (require('express-sessions'))({
        storage: 'mongodb',
        instance: mongoose, // optional
        host: 'localhost', // optional
        port: 27017, // optional
        db: 'codepost', // optional
        collection: 'mysessions', // optional
        expire: 1000 * 60 * 15000000
    })
  }
));


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/cookie', cookie);
app.use('/free', free);

// Return other routes to Angular index file..
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set port
const port = process.env.PORT || '4000';
app.set('port', port);

// Create the HTTP Server
const server = http.createServer(app);

server.listen(port, () => console.log(`http://localhost:${port}`));
