const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ferifaris97:simpan03@learnmongo.yyijmrz.mongodb.net/expressjs_tutorial?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connect"))
  .catch((err) => console.log(err));
