const Hospital = require("../models/hospital.model")

const view_hospitals = async (req, res) => {
  try {

    const hospital = await Hospital.find({});

    res.status(200).json({ success: true, hospital_info: hospital });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error registering the vaccine." });
  }
};

module.exports = {
    view_hospitals
};
