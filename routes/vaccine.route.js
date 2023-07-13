const express = require("express");
const router = express.Router();
const { view_all_vaccines} = require("../controllers/vaccine.controller");

router.get("/view_all_vaccines", view_all_vaccines);


module.exports = router;
