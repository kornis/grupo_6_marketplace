var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.root);
router.get("/carrito", mainController.carrito);

module.exports = router;
