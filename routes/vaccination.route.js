const express = require("express");
const router = express.Router();
const { vaccine_register, view_vaccines} = require("../controllers/vaccination.controller");

router.post("/vaccine_register", vaccine_register);
router.get("/view_vaccines/:nid", view_vaccines);

module.exports = router;
