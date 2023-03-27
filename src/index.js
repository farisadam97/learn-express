const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const MongoStore = require("connect-mongo");
// Passport
require("./strategies/local");

const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");
const authRoute = require("./routes/auth");

require("./database");
const app = express();
const PORT = 3998;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    secret: "manukan20@05",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ferifaris97:simpan03@learnmongo.yyijmrz.mongodb.net/expressjs_tutorial?retryWrites=true&w=majority",
    }),
  })
);

app.use((req, res, next) => {
  console.log(`${req.method} : ${req.url} `);
  next();
}); //middleware

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);
app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
