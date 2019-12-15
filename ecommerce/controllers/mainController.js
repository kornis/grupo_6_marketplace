var fs = require('fs');
var path = require('path');
function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/front/"+filename+".html"),"utf-8");
    
    return htmlfile;
}


controller = 
{
    root: (req, res) => {
        res.send(readHTML('index'));
    },

    carrito: (req, res) => {
        res.send(readHTML('carrito'));
    },
    
    registro: (req, res) => {
        res.send(readHTML('formulario-registro'));
    },
    productDetail: (req,res) => {
        res.send(readHTML('productDetail'));
    }
}

module.exports = controller;