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

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
});

 module.exports = {
    app,
    server
}
