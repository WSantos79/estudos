const express = require("express"); // importando o express
const app = express(); // iniciando o express

app.get("/",function(req, res){
    res.send("Seja bem vindo ao site!!")
});

app.get("/blog/:artigo?", function(req, res){
    res.send("Bem vindo ao meu blog")
})

app.get("/ola/:nome?/:empresa?", function(req, res){
    // REQ = dados enviados pelo usuario
    // res = dados enviados para usuario
    let nome = req.params.nome
    let empresa = req.params.empresa

    if(nome && empresa){    
    res.send("<h1>Oi " + nome + " da empresa " + empresa + "!!</h1>");
}   if(nome && empresa == null){
    res.send("<h1>Oi " + nome + "!!</h1>");
    }else {
        res.send("<h1>Bem vindo</h1>");
    }
})

app.get("canal", function(req, res){
    let canal = req.query["canal"]
)}

app.listen(8181, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})
