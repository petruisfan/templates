#!/usr/local/bin/node

var express = require('express'),
    player = require('./routes/player');

var app = express();
/**
 * Return the html files.
 */
app.configure(function() {
    app.use(express.static("public"));
    app.use(express.bodyParser());  // needed for post 
});
//
// Routes!
//
app.get('/rest/*', player.list);
app.post('/post', player.post);
//
// Start server.
//
app.listen(3000);
console.log('Node.js server listening on port 3000...');

