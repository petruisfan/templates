#!/usr/local/bin/node

var express = require('express'),
    player = require('./routes/player');

var app = express();
/**
 * Return the html files.
 */
app.use(express.static("public"));
//
// Routes!
//
app.get('/rest/*', player.list);
//
// Start server.
//
app.listen(3000);
console.log('Node.js server listening on port 3000...');

