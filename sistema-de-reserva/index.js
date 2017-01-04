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

app.get("/pessoas", (req,res) => {
  knex("pessoas").select().then((ret) => res.send(ret));
});

app.post("/pessoa", (req,res) => {
  var nova_pessoa = req.body;
  
  knex("pessoas").insert(nova_pessoa,"nome_pessoa").then((ret) => {
    nova_pessoa.id_pessoa = ret[0];
    res.send(nova_pessoa);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.listen(3000);
console.log("App online!");