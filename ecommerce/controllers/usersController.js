const path = require('path');

var controller = {

    root: (req, res) =>
    {
        res.render("front/login");
    }
}

module.exports = controller;