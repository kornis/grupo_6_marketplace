var fs = require('fs');
var path = require('path');
function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/front/"+filename+".ejs"),"utf-8");
    return htmlfile;
}

controller = 
{
    root: (req, res) => {
        res.render(path.join(__dirname,'../views/front/index'));
    },

    carrito: (req, res) => {
        res.render(path.join(__dirname,'../views/front/carrito'));
    },
    
    registro: (req, res) => {
        res.render(path.join(__dirname,'../views/front/formulario-registro'));
    },
    productDetail: (req,res) => {
        res.render(path.join(__dirname,'../views/front/productDetail'));
    }
}

module.exports = controller;