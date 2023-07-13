const Vaccination = require("../models/vaccination.model");

// Controller for registering a vaccine
const vaccine_register = async (req, res) => {
  try {
    const { n_id, vaccine_id, administeredAt,vaccine_name } = req.body;

    // Check if there are existing entries for the same NID and vaccine ID
    const existingVaccines = await Vaccination.find({
      n_id,
      vaccine_id,
    });

    const dose_no = existingVaccines.length + 1;

    // Create a new vaccination entry
    const vaccination = new Vaccination({
      n_id,
      vaccine_id,
      dose_no,
      administeredAt,
      vaccine_name,
    });

    // Save the vaccination entry
    await vaccination.save();

    res
      .status(200)
      .json({ success: true, message: "Vaccine registered successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error registering the vaccine." });
  }
};

const view_vaccine_appointments = async (req, res) => {
  try {
    const { nid } = req.params;
    console.log(nid);
    // const vaccines = await Vaccination.find({ n_id: nid });
    const vaccines = await Vaccination.find({
      n_id: nid,
      received_Vaccine: false,
    });
    

    res.status(200).json({ success: true, data: vaccines });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error retrieving vaccines." });
  }
};

const view_vaccines_completed = async (req, res) => {
  try {
    const { nid } = req.params;
    console.log(nid);
    // const vaccines = await Vaccination.find({ n_id: nid });
    const vaccines = await Vaccination.find({
      n_id: nid,
      received_Vaccine: true,
    });

    //now using Vaccination and Vaccine models, implement a look up that joins by vaccine_id and _id
    // const vaccines = await Vaccination.find({ n_id: nid });
    // const vaccines = await Vaccination.find({
    //   n_id: nid,
    //   received_Vaccine: true,
    // });


    res.status(200).json({ success: true, data: vaccines });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error retrieving vaccines." });
  }
};

module.exports = {
  vaccine_register,
  view_vaccine_appointments,
  view_vaccines_completed,
};
