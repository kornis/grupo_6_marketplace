const path = require('path');

var controller = {

    root: (req, res) =>
    {
        res.render(path.join(__dirname,"../views/front/login"));
    }
}

module.exports = controller;