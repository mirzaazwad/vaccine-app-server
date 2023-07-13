const mongoose = require("mongoose");
const VaccineSchema = new mongoose.Schema({
  vaccine_name: {
    type: String,
    required: true,
  }
});
const Vaccine = mongoose.model("Vaccine", VaccineSchema);
module.exports = Vaccine;