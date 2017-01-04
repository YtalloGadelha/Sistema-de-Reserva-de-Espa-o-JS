//index.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("frontend"));

app.get("/hello", (req,res) => res.send("Inhaeããããã :P"));

//Tabela Pessoas
app.get("/pessoas", (req,res) => {
  knex("Pessoas").select().then((ret) => res.send(ret));
});

app.post("/pessoa", (req,res) => {
  var nova_pessoa = req.body;

  knex("Pessoas").insert(nova_pessoa,"nome_pessoa").then((ret) => {
    nova_pessoa.id_pessoa = ret[0];
    res.send(nova_pessoa);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

//Tabela Espacos
app.get("/espacos", (req,res) => {
  knex("Espacos").select().then((ret) => res.send(ret));
});

app.post("/espaco", (req,res) => {
  var novo_espaco = req.body;

  knex("Espacos").insert({
  	nome_espaco:novo_espaco.nome_espaco,
  	descricao_espaco:novo_espaco.descricao_espaco
  }).then((ret) => {
    novo_espaco.id_espaco = ret[0];
    res.send(novo_espaco);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

//Tabela Reservas
app.get("/reservas" ,(req,res) => {

  knex("Reservas").select().then((ret) => res.send(ret));
});

app.post("/reserva", (req,res) => {
  var nova_reserva = req.body;

  knex("Reservas").insert({
    nome_pessoa:nova_reserva.nome_pessoa,
    nome_espaco:nova_reserva.nome_espaco,
    data_inicio_reserva:nova_reserva.data_inicio_reserva,
    data_termino_reserva:nova_reserva.data_termino_reserva
  }).then((ret) => {
    nova_reserva.id_reserva = ret[0];
    res.send(nova_reserva);
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});


app.listen(4000);
console.log("App online!");