const express = require("express");
require('dotenv').config();
const connectDB = require("./middleware/db");
const app = express();
const cors = require("cors");

app.use(express.json()); //req.body
app.use(cors());

connectDB();

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/vaccine", require("./routes/vaccination.route"));
app.use("/api/vaccine_info",require("./routes/vaccine.route"));
app.use("/api/hospital",require("./routes/hospital.route"));
app.use("/api/user",require("./routes/user.route"));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
});

 module.exports = {
    app,
    server
}
