var fs = require('fs');
var path = require('path');
/*function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/front/"+filename+".ejs"),"utf-8");
    return htmlfile;
}*/
const cartPath = path.join(__dirname, "../db/cart.json");
const cart = fs.readFileSync(cartPath,'utf-8');
cartJson = cart.length != 0 ? JSON.parse(cart) : [];
let product = fs.readFileSync(path.join(__dirname,'../db/products.json'),'utf-8');
productJson = product.length != 0 ? JSON.parse(product) :  "error";
const userPath = path.join(__dirname,"../db/users.json");
let userfile = fs.readFileSync(userPath,'utf-8');
var userJson = userfile.length != 0 ? JSON.parse(userfile) : [];
var producto = "";
var user = 
{
    id:0,
    name: "",
    email:"",
    lastName: "",
    password: ""
}

var productoCompra = 
{
    id:0,
    idCart:0,
    titulo:"",
    precio:0,
    cantidad:0,
    talle:"",
    color:""
}


controller = 
{
    root: (req, res) => {
        res.render('front/index',{producto: productJson,carrito:cartJson});
        
    },

    carrito: (req, res) => {

        res.render('front/carrito',{carrito: cartJson});
    },
    
    registro: (req, res) => {
        res.render('front/formulario-registro',{carrito: cartJson});
    },
    productDetail: (req,res) => {
        for(var prod in productJson)
        {
          
            if(productJson[prod].id == req.params.id)
            {
                producto = productJson[prod];
                
                res.render('front/productDetail',{product: producto,carrito:cartJson});
            }
        }
         
        res.render('front/productDetail',{fail: "Producto no encontrado",carrito:cartJson});
    },
    addUser: (req,res)=>{
        if(userJson.length == 0)
        {
            user.id = 1;
        }
        else
        {
            user.id = userJson.length + 1;
        }
        user.name = req.body.name;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        userJson.push(user);
        fs.writeFileSync(userPath,JSON.stringify(userJson));
        res.redirect('/');
    },
    addCart: (req,res)=>
    {

       for(var cp in cartJson)
       {
           if(cartJson[cp].id == req.body.id && cartJson[cp].talle == req.body.talle)
           {
                cartJson[cp].cantidad = parseInt(cartJson[cp].cantidad,10) + parseInt(req.body.cantidad,10); 
                fs.writeFileSync(cartPath,JSON.stringify(cartJson));
                res.redirect("/");
                process.exit();
           }
       } 

       
       for(var p in productJson){
           if(productJson[p].id == req.body.id)
           {
                productoCompra.id = req.body.id;
                productoCompra.titulo = productJson[p].title;
                productoCompra.precio = parseInt(productJson[p].price);
                productoCompra.color = productJson[p].color;
                productoCompra.talle = req.body.talle;
                productoCompra.cantidad = parseInt(req.body.cantidad);
                cartJson.push(productoCompra);
                fs.writeFileSync(cartPath,JSON.stringify(cartJson));
               res.redirect('/');
              
               process.exit();
           }
       }
 
      
    },
    deleteCart: (req,res) =>
    {
        cartJson = cartJson.filter(item =>{
            item.id != req.params.id
        });

        fs.writeFileSync(cartPath,JSON.stringify(cartJson));
        res.redirect('/carrito');
    }

}

module.exports = controller;

