const Vaccine = require("../models/vaccine.model")

const view_all_vaccines = async (req, res) => {
  try {

    const vaccines = await Vaccine.find({});

    res.status(200).json({ success: true, vaccine_info: vaccines });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error registering the vaccine." });
  }
};

module.exports = {
    view_all_vaccines
};
