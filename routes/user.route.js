const express = require("express");
const { fetchUserDetails } = require("../controllers/usercontroller");
const router = express.Router();

router.get("/get-user/:n_id", fetchUserDetails);

module.exports = router;
