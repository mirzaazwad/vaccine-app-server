const mongoose = require("mongoose");

const connectDB = async()=>{
    const connection=await mongoose.connect(process.env._MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return connection;
}


module.exports = connectDB;
