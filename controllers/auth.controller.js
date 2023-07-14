// Assuming you have access to the necessary dependencies and models
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const dotenv = require("dotenv");

dotenv.config();

const is_verify = async (req, res) => {
  try {
    res.status(200).json({
      message: "Token is valid",
      state: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json("Server Error");
  }
};

const register = async (req, res) => {
  try {
    const { n_id, name, address, password } = req.body;
    let user = await User.findOne({ n_id: n_id });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      n_id,
      name,
      address,
      password: hashedPassword,
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Registration successful",
        user: newUser,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error! Registration failed. Please try again after some time",
      });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { n_id, password } = req.body;
    let user = await User.findOne({ n_id: n_id });

    if (!user) {
      return res.status(400).json({ message: "Invalid n_id or password!" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid n_id or password!" });
    }

    const token = jwtGenerator(user.n_id);
    res
      .status(200)
      .json({
        success: true,
        token: token,
        message: "Login successful",
        user: user,
      });
  } catch (error) {
    res.status(500).json({message: "Login Unsuccessful! Please try again after some time!"});
  }
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

module.exports = {
  register,
  login,
  is_verify,
};
