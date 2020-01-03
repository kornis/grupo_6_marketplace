const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) =>
    {
        cb(null,path.join(__dirname,'../public/images/products'));
    }
,
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      }
});
var upload = multer({ storage: storage});

router.get('/agregar-producto',adminController.addProduct);
router.post('/agregar-producto',upload.any(),adminController.saveProduct);


module.exports = router;