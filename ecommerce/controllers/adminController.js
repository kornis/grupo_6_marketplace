var fs = require('fs');
var path = require('path');
function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/admin/"+filename+".html"),"utf-8");
    
    return htmlfile;
}

controller = 
{
    addProduct: (req, res) => {
        res.send(readHTML('addProduct'));
    },
    root: (req,res) => {
        res.send("hola");
    }
}


module.exports = controller;