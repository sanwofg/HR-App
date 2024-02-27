const { user } = require("../models/userSchema");
// const { loginJoi } = require("../validators/joiValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const login = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const isUser = await user.findOne({ email: Email });
    if (isUser) {
      let validPassword = await bcrypt.compare(Password, isUser.password);
      if (!validPassword) {
        return res
          .status(401)
          .send({ auth: false, message: "Invalid Username or Password" });
      } else {
        const token = jwt.sign(
          {
            _id: isUser._id,
            email: isUser.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "2h" }
        );
        res.cookie("hrappUserToken", token, { maxAge: 1000 * 60 * 60 });
        res.status(200).json({ auth: true, message: "User logged in" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ auth: false, error: "Error with the server" });
  }
};
module.exports = login;
