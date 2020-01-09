var fs = require('fs');
var path = require('path');

const productPath = path.join(__dirname,'../db/products.json');
const cartPath = path.join(__dirname, "../db/cart.json");
function getAllproducts()
{
    let productsFile = fs.readFileSync(productPath,'utf-8');
    var productsJson;
    if(productsFile == '')
    {
        productsJson = [];
    }
    else
    {
         productsJson = JSON.parse(productsFile);
    }
    return productsJson;
}

function getAllcart()
{
    const cartFile = fs.readFileSync(cartPath,'utf-8');
    var cartJson;
    if(cartFile == '')
    {
        cartJson = [];
    }
    else
    {
        cartJson = JSON.parse(cartFile);
    }
    return cartJson;
}







let userfile = fs.readFileSync(userPath,'utf-8');
var userJson = userfile.length != 0 ? JSON.parse(userfile) : [];
var producto = "";