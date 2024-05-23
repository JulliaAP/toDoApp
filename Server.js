const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Conectando com o MongoDB...`);
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(routes);

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});