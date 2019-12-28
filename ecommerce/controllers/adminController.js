var fs = require('fs');
var path = require('path');
/*function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/admin/"+filename+".html"),"utf-8");
    
    return htmlfile;
}*/

let product =   {id:"",
                title: "",
                price: "",
                cantInicial: "",
                formaEntrega: "",
                codOferta:"",
                descuento: "",
                marca:"",
                bolsillos: "",
                tipoPrenda: "",
                tela: "",
                sexo: "",
                fit: "",
                descripcion: ""};
let fileInfo = fs.readFileSync(path.join(__dirname,'../db/products.json'),'utf-8');
var products = fileInfo.length == 0 ? products = [] : JSON.parse(fileInfo);


controller = 
{
    addProduct: (req, res) => {
        res.render(path.join(__dirname,'../views/admin/addProduct'));
    },

    saveProduct: (req, res) =>
    {
        product.id = products.length + 1;
        product.title = req.body.title;
        product.price = req.body.price;
        product.cantInicial = req.body.initialAmount;
        product.formaEntrega = req.body.shipping;
        product.codOferta = req.body.offerCode;
        product.descuento = req.body.discount;
        product.marca = req.body.brand;
        product.bolsillos = req.body.pocket;
        product.tipoPrenda = req.body.type_cloth;
        /*product.tela = req.body.cloth;
        product.sexo = req.body.gender;
        product.fit = req.body.fit;*/
        //product.descripcion = req.body.description;
        products.push(product);
        
        fs.writeFileSync(path.join(__dirname,'../db/products.json'),JSON.stringify(products));
        res.redirect('../');
    }
}


module.exports = controller;