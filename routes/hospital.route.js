const express = require("express");
const router = express.Router();
const { view_hospitals} = require("../controllers/hospital.controller");

router.get("/view_hospitals", view_hospitals);


module.exports = router;
