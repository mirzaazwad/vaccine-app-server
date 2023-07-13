const mongoose = require("mongoose");
const HospitalSchema = new mongoose.Schema({
  hospital_name: {
    type: String,
    required: true,
  },
  hospital_address: {
    type: String,
    required: true,
  },
  hospital_city: {
    type: String,
    required: true,
  }
});
const Hospital = mongoose.model("Hospital", HospitalSchema);
module.exports = Hospital;