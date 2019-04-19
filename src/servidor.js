//O que é uma porta ? é um processo no computador, ele precisa de uma porta para se comunicar com um app especifico
const porta = 3003;
const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");
/*
essa function ira servir o conteudo para qualquer url que for chamada
app.use((req, res, next) => {
  res.send({ nome: "Notebook", preco: 123.45 }); //vai converter para json por causa do metodo
});
*/
app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos()); //vai converter para json por causa do metodo
});

//:id eh acesso a um parametro na url
//esse id eh pego do request req por que esta na requisicao
app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

//Agora para salvar um novo produto eh necessario utilizar o post
app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco
  });
  res.send(produto); //JSON
});

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}`);
});
