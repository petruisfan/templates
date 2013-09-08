var data = require("./data");

// Will be assigned a value by the "all" function.
var entityName,
   	entity,
   	id;
var startId=100;	// use this when adding new stuff
/**
 * Called before all the HTTP requests
 */
exports.all = function(req, res, next) {
	console.log(req.method + ": ", req.url);

	entityName = req.params.entity;
	id = req.params.id;
    entity = data.entity[entityName];

    if ( ! entity ) {
    	res.send(404, "No such entity: " + entityName);
    	return;
    }
    next();
}
/**
 * Return all the entity content
 */
exports.listAll = function(req, res) {
    if (entity) {
	    res.send(entity);
    } 
};
/**
 * Return the entity with a specific ID.
 */
exports.list = function(req, res) {
	for (var i in entity) {
        if (entity[i].id == id) {
            res.send(entity[i]);
            return;
        }
    }
    res.send("No " + entityName + " with id " + id);
};
/**
 * Add a new entity with the incremented ID
 */
exports.add = function(req, res) {
    var json = req.body;
    console.log("Adding new " + entityName + ": ", json);

    json.id = startId++;
    entity.push(json);
    res.send(json);
};
/**
 * Edit an entity
 */
exports.edit = function(req, res) {
    var json = req.body;
    console.log("Editing " + entityName + " " + id + ": ", json);    

    for (var i in entity) {
        if (entity[i].id == id) {
        	entity[i] = json;
        	res.send(json);
        }
    }
    res.send(404, "No " + entityName + " with id " + id);
};
/**
 * Delete an entity
 */
exports.remove = function(req, res) {
    console.log("Removing " + entityName + ": ", id);

    for (var i in entity) {
        if (entity[i].id == id) {
            entity.splice(i, 1)
            res.send("OK");
            return;
        }
    }
    res.send(entityName + " with id " + id + " not found!!!");
};
