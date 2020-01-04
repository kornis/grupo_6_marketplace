var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.root);
router.get("/carrito", mainController.carrito);
router.get('/detalle-producto/:id',mainController.productDetail);
router.get('/registrarse',mainController.registro);
router.post('/registrarse', mainController.addUser);
module.exports = router;
