var fs = require('fs');
var path = require('path');
function readHTML(filename)
{
    var htmlfile = fs.readFileSync(path.join(__dirname,"/../views/"+filename+".html"),"utf-8");
    
    return htmlfile;
}

controller = 
{
    root: (req, res) => {
        res.send(readHTML('index'));
    }
}

module.exports = controller;