// this is a simple server which simply provides clients with access to the
// react application in a production-like environment
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);
