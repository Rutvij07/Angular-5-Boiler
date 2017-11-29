const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const session = require('express-session');
const app = express();

const mongoose = require('mongoose');

const api = require('./server/routes/api');
const auth = require('./server/routes/auth');
const builderApi = require('./server/routes/builderApi');

//Set Cookie
app.use(session(
    {
      name: 'myName',
      secret: '#@$#!ng',
      resave: true,
      saveUninitialized: true,
      overwrite: true,
      unset: 'destroy',
      rolling: true,
      "cookie": {
        maxAge: 1000 * 60 * 15000000
      },
      store: new (require('express-sessions'))({
          storage: 'mongodb',
          instance: mongoose, // optional
          host: 'localhost', // optional
          port: 27017, // optional
          db: 'auction', // optional
          collection: 'mysessions', // optional
          expire: 1000 * 60 * 15000000
      })
    }
  ));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Api routes
app.use('/api',api);
app.use('/auth',auth);
app.use('/builderApi',builderApi);

// Angular 4 DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
