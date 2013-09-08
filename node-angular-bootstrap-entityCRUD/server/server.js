#!/usr/local/bin/node

var express = require('express'),
    entity = require('./routes/entity');

var app = express(),
    root = "/admin-loc",
    port = 3000;

app.configure(function () {
    /**
     * Return the html files.
     */
    app.use(root, express.static(".."));
    app.use(express.bodyParser());
});
//
// Routes!
//
app.all(root +"/:entity/:id", entity.all);
app.get (root + '/:entity/all', entity.listAll);
app.get (root + '/:entity/:id', entity.list);
app.put (root + '/:entity/:id', entity.edit);
app.post(root + '/:entity', entity.add);
app.delete(root + '/:entity/:id', entity.remove);
//
// Start server.
//
app.listen(port);
console.log('Node.js server listening on port ' + port);
