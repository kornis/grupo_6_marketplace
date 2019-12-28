var fs = require('fs');
var path = require('path');
/*function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/front/"+filename+".ejs"),"utf-8");
    return htmlfile;
}*/
let aviso;
let product = fs.readFileSync(path.join(__dirname,'../db/products.json'),'utf-8');
productJson = product.length != 0 ? JSON.parse(product) :  "No se encontraron productos disponibles";

controller = 
{
    root: (req, res) => {
        if(product === "")
        {
        
        res.render(path.join(__dirname,'../views/front/index'),{producto: productJson});
        }
        else
        {
            
            res.render(path.join(__dirname,'../views/front/index'),{producto: productJson});
        }

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