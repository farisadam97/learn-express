const express = require("express");
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");

const app = express();
const PORT = 9991;

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`${req.method} : ${req.url} `);
  next();
}); //middleware

app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
