const mongoose = require("mongoose");
const VaccinationSchema = new mongoose.Schema({
  vaccine_name: {
    type: String,
    required: true,
  }
});
const Vaccination = mongoose.model("Vaccination", VaccinationSchema);
module.exports = Vaccination;