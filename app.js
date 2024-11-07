const express = require("express");
const data = require("./data");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/user", (req, res) => {
  res.render("user", { users: data.users });
});


app.get("/products", (req, res) => {
  res.render("products", { products: data.products });
});