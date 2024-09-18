const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");


// register
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
        userName, email, password: hashPassword
    })

    await newUser.save();
    res.status(200).json({ success: true, message: "Registration successful !!" });

  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Server Error !!" });
  }
};

// login
const login = async (req, res) => {
    try {
    } catch (e) {
      console.log(e);
      res.status(500).json({ success: false, message: "Server Error" });
    }
}


// logout

// auth middleware


module.exports = {registerUser}