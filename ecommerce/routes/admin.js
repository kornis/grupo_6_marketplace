var express = require('express');
var router = express.Router();
const adminController = require("../controllers/adminController");

router.get('/agregar-producto',adminController.addProduct);
router.get("/",adminController.root);


module.exports = router;