
exports.list = function(req, res) {
    var id = req.params;
    console.log("requesting " + id);

    var result = {'response': "Hello World"};
    res.send(result);
};

exports.post = function(req, res) {
    var json = req.body;
    console.log(json);
}

