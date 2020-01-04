var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");
/* GET users listing. */
router.get('/login', usersController.root);

module.exports = router;
