const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
