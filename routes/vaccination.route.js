const express = require("express");
const router = express.Router();
const { vaccine_register, view_vaccine_appointments, view_vaccines_completed} = require("../controllers/vaccination.controller");

router.post("/vaccine_register", vaccine_register);
router.get("/view_vaccines_completed/:nid", view_vaccines_completed);
router.get("/view_vaccine_appointments/:nid", view_vaccine_appointments);

module.exports = router;
