const fs = require('fs');
const path = require('path');


/*function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/admin/"+filename+".html"),"utf-8");
    
    return htmlfile;
}*/

let product =   {id:0,
                title: "",
                price: 0,
                cantidad: {
                cantxs: 0,
                cants: 0,
                cantm: 0,
                cantl: 0,
                cantxl: 0},
                formaEntrega: "",
                codOferta:"",
                descuento: 0,
                marca:"",
                bolsillos: "",
                tipoPrenda: "",
                tela: "",
                sexo: "",
                fit: "",
                color:"",
                descripcion: "",
                imagenes:[]
                
                };


let fileInfo = fs.readFileSync(path.join(__dirname,'../db/products.json'),'utf-8');
var products = fileInfo.length == 0 ? products = [] : JSON.parse(fileInfo);


controller = 
{
    addProduct: (req, res) => {
        res.render('admin/addProduct');
    },

    saveProduct: (req, res, next) =>
    {
        product.id = products.length + 1;
        product.title = req.body.title;
        product.price = parseInt(req.body.price,10);
        product.cantidad.cantxs =parseInt(req.body.xsAmount,10);
        product.cantidad.cants = parseInt(req.body.sAmount,10);
        product.cantidad.cantm = parseInt(req.body.mAmount,10);
        product.cantidad.cantl = parseInt(req.body.lAmount,10);
        product.cantidad.cantxl = parseInt(req.body.xlAmount,10);
        product.formaEntrega = req.body.shipping;
        product.codOferta = req.body.offerCode;
        product.descuento = req.body.discount;
        product.marca = req.body.brand;
        product.bolsillos = req.body.pocket;
        product.tipoPrenda = req.body.type_cloth;
        product.tela = req.body.cloth;
        product.sexo = req.body.gender;
        product.fit = req.body.fit;
        product.color = req.body.color;
        product.descripcion = req.body.description;
        for(var i = 0; i<= req.files.length; i++){
        
       if(typeof req.files[i] !== 'undefined'){
             product.imagenes[i]= req.files[i].filename;
        }
    }
        
       
        

        products.push(product);
        fs.writeFileSync(path.join(__dirname,'../db/products.json'),JSON.stringify(products));
        res.redirect('/');
    
    },

    categories: (req,res) =>
    {
        res.render('admin/categories');
    }
}


module.exports = controller;