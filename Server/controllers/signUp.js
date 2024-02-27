// const { user } = require("../models/userSchema");
// const { signupJoi } = require("../validators/joiValidation");
// const bcrypt = require("bcrypt");

// const signUp = async (req, res) => {
//   const { error, value } = signupJoi(req.body);
//   if (error) {
//     return res.status(400).send(error);
//   }
//   try {
//     const userExists = await user.findOne({ email: value.email });
//     if (userExists) {
//       return res.status(409).json({ message: "User already exists" });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(value.password, salt);
//     const newUser = new user({
//       email: value.email,
//       password: hashedPassword,
//       confirmPassword: value.confirmPassword,
//     });
//     await newUser.save().then(() => {
//       res.status(200).json({ message: "New User Created" });
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// module.exports = signUp;

const { user } = require("../models/userSchema");
const { signupJoi } = require("../validators/joiValidation");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "isaiahgabbz@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

const generateToken = () => {
  return crypto.randomBytes(16).toString("hex");
};

const signUp = async (req, res) => {
  const { error, value } = signupJoi(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  try {
    const userExists = await user.findOne({ email: value.email });

    if (userExists) {
      return res.status(409).json({ message: "User already exist" });
    }

    const token = generateToken();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(value.password, salt);

    const newUser = new user({
      email: value.email,
      password: hashedPassword,
      confirmPassword: value.confirmPassword,
      // Add the token to the user data
      confirmationToken: token,
    });

    await newUser.save();

    const confirmationLink = `https://main.d2lg08iavdojxg.amplifyapp.com//confirm-email?token=${token}`;

    const mailOptions = {
      from: "isaiahgabbz@gmail.com",
      to: value.email,
      subject: "Email Confirmation",
      // text: `Click the following link to confirm your email: ${confirmationLink}`,
      html: `Click the following link to confirm your email: 
              <a href="${confirmationLink}">${confirmationLink}</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(403).json({
          message: "Error sending confirmation email",
          error: error.message,
        });
      }
      console.log("Email sent: " + info.response);
      res
        .status(201)
        .json({ message: "New User Created. Confirmation email sent." });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = signUp;
