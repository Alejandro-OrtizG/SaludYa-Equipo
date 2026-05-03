const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

app.listen(3001, () => {
  console.log("Servidor en http://localhost:3001");
});