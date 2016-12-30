//index.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);
const express = require("express");

const app = express();

app.get("/hello", (req,res) => res.send("Inhaeããããã :P"));

app.listen(3000);
console.log("App online!");