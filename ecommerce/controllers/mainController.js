var fs = require('fs');
var path = require('path');
/*function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/front/"+filename+".ejs"),"utf-8");
    return htmlfile;
}*/

let product = fs.readFileSync(path.join(__dirname,'../db/products.json'),'utf-8');
productJson = product.length != 0 ? JSON.parse(product) :  "No se encontraron productos disponibles";
const userPath = path.join(__dirname,"../db/users.json");
let userfile = fs.readFileSync(userPath,'utf-8');
var userJson = userfile.length != 0 ? JSON.parse(userfile) : [];

var user = 
{
    id:"",
    name: "",
    email:"",
    lastName: "",
    password: ""
}

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
        res.redirect('../');
    }

}

module.exports = controller;