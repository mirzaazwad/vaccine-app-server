const mongoose = require("mongoose");
const VaccinationSchema = new mongoose.Schema({
  n_id: {
    type: String,
    required: true,
  },
  vaccination_date: {
    type: Date,
  },
  vaccine_id: {
    type: String,
    required: true,
  },
  dose_no: {
    type:Number,
    default: 1 
  },
  administeredAt:{
    type: String,
    required: true,
  },
  received_Vaccine: {
    type: Boolean,
    default: false
  }
});
const Vaccination = mongoose.model("Vaccination", VaccinationSchema);
module.exports = Vaccination;