const { Router } = require("express");
const passport = require("passport");
const router = Router();
const User = require("../database/schemas/User");
const { hashPassword, comparePassword } = require("../utils/helpers");

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return response.status(400);
//   }

//   const userDB = await User.findOne({ email });
//   if (!userDB) return response.send(401);

//   const isValidPass = comparePassword(password, userDB.password);

//   if (isValidPass) {
//     req.session.user = userDB;
//     return res.send(200);
//   } else {
//     return res.send(401);
//   }
// });

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(200);
});

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const userDB = await User.findOne({ email });

  if (userDB) {
    res.status(400).send({ msg: "user alrd exist" });
  } else {
    const password = hashPassword(req.body.password);
    const newUser = await User.create({ password, email });
    res.status(201).send({ msg: "User created!" });
  }
});
module.exports = router;
