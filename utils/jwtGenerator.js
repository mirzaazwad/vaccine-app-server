const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(n_id) {
  const payload = {
    user: {
      n_id: n_id,
    },
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "3h" });
}

module.exports = jwtGenerator;
