const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("../database/schemas/User");
const { hashPassword, comparePassword } = require("../utils/helpers");

passport.serializeUser((user, done) => {
  console.log("Serializing user .. . ");
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log(id);
  try {
    const user = await User.findById(id);
    if (!user) throw new Error("User not ofund");
    done(null, user);
  } catch (error) {
    console.log(error);
    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      console.log(email);

      try {
        if (!email || !password) {
          throw new Error("Bad request. Missing credential");
        }

        const userDB = await User.findOne({ email });
        if (!userDB) {
          done("User not found!", null);
        }

        const isValidPass = comparePassword(password, userDB.password);

        if (isValidPass) {
          done(null, userDB);
        } else {
          done(null, null);
        }
      } catch (error) {
        done(error, null);
      }
    }
  )
);
