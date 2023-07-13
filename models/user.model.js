const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  n_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;