//O que é uma porta ? é um processo no computador, ele precisa de uma porta para se comunicar com um app especifico
const porta = 3003;
const express = require("express");
const app = express();
/*
essa function ira servir o conteudo para qualquer url que for chamada
app.use((req, res, next) => {
  res.send({ nome: "Notebook", preco: 123.45 }); //vai converter para json por causa do metodo
});
*/
app.get("/produtos", (req, res, next) => {
  res.send({ nome: "Notebook", preco: 123.45 }); //vai converter para json por causa do metodo
});

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}`);
});
