const fs = require('fs');
const path = require('path');


/*function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/admin/"+filename+".html"),"utf-8");
    
    return htmlfile;
}*/

let product =   {id:"",
                title: "",
                price: "",
                cantidad: {
                cantxs: "",
                cants: "",
                cantm: "",
                cantl: "",
                cantxl: ""},
                formaEntrega: "",
                codOferta:"",
                descuento: "",
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
        res.render(path.join(__dirname,'../views/admin/addProduct'));
    },

    saveProduct: (req, res, next) =>
    {
        product.id = products.length + 1;
        product.title = req.body.title;
        product.price = req.body.price;
        product.cantidad.cantxs = req.body.xsAmount;
        product.cantidad.cants = req.body.sAmount;
        product.cantidad.cantm = req.body.mAmount;
        product.cantidad.cantl = req.body.lAmount;
        product.cantidad.cantxl = req.body.xlAmount;
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
       // product.imagenes.imagen1 = req.files[0].filename;
        for(var i = 0; i<= req.files.length; i++){
        
       if(typeof req.files[i] !== 'undefined'){
             product.imagenes[i]= req.files[i].filename;
        }
    }
        /*
        product.imagenes.imagen3 = req.files[2].filename;
        product.imagenes.imagen4 = req.files[3].filename;*/
       
        

        products.push(product);
        fs.writeFileSync(path.join(__dirname,'../db/products.json'),JSON.stringify(products));
        res.redirect('../');
        console.log(req.files[1]);
    }
}


module.exports = controller;