const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const server = express();

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.use(routes);
server.use(express.static('public'));
server.set("view engine", "njk");

server.listen(8000, function(){
    return console.log("Server Running na porta 8000");
});