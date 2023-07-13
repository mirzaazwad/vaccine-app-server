const Vaccination = require("../models/vaccination.model");

// Controller for registering a vaccine
const vaccine_register = async (req, res) => {
    try {
      const { n_id, vaccine_id, administeredAt } = req.body;
  
      // Check if there are existing entries for the same NID and vaccine ID
      const existingVaccines = await Vaccination.find({
        n_id,
        vaccine_id,
      });
  
      // Calculate the new dosage based on the number of existing entries
      const dose_no = existingVaccines.length + 1;
  
      // Create a new vaccination entry
      const vaccination = new Vaccination({
        n_id,
        vaccine_id,
        dose_no,
        administeredAt,
      });
  
      // Save the vaccination entry
      await vaccination.save();
  
      res.status(200).json({ success: true, message: "Vaccine registered successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error registering the vaccine." });
    }
  };
  

const view_vaccines = async (req, res) => {
  try {
    const {nid} = req.params;
    console.log(nid)
    // const vaccines = await Vaccination.find({ n_id: nid });
    const vaccines = await Vaccination.find({ n_id: nid, vaccination_date: { $ne: null } });

    res.status(200).json({ success: true, data: vaccines });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error retrieving vaccines." });
  }
};

module.exports = { vaccine_register, view_vaccines };
