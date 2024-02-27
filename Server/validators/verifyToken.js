// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const { user } = require("../models/userSchema");

// const verifyToken = async (req, res, next) => {
//   const token = req.cookies.hrappUserToken;

//   if (token) {
//     jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
//       if (error || !decoded) {
//         req.user = null;
//         res
//           .status(401)
//           .json({ message: "Access denied. You must login first." });
//       } else {
//         const userID = await user.findById(decoded._id);
//         req.user = userID._id;
//         req.email = userID.email;
//         next();
//       }
//     });
//   } else {
//     req.user = null;
//     res.status(401).json({ message: "Access denied. You must login first." });
//   }
// };

// module.exports = verifyToken;

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// require("dotenv").config();
const { user } = require("../models/userSchema");

dotenv.config();

const verifyToken = async (req, res, next) => {
  const token = req.cookies.hrappUserToken;

  try {
    if (!token) {
      res.status(403).json({ message: "You are not logged in!" });
    } else {
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
      if (!decoded) {
        res.status(401).json({ you: "shall not pass!" });
      } else {
        const userID = await user.findById(decoded.id);
        if (!userID) {
          res.status(400).json({ message: "No such user found." });
        } else {
          req.user = userID._id;
          req.email = userID.email;
          next();
        }
      }
    }
  } catch (error) {
    req.user = null;
    res.status(400).json({ message: error.message });
  }

  //   if (token) {
  //     try {
  //       const decoded = await jwt.verify(token, process.env.SECRET_KEY);

  //       if (!decoded) {
  //         req.user = null;
  //         res
  //           .status(401)
  //           .json({ message: "Access denied. You must login first." });
  //       } else {
  //         const userID = await user.findById(decoded._id);

  //         if (userID) {
  //           req.user = userID._id;
  //           req.email = userID.email;
  //           next();
  //         } else {
  //           req.user = null;
  //           res.status(401).json({ message: "User not found." });
  //         }
  //       }
  //     } catch (error) {
  //       req.user = null;
  //       res.status(401).json({ message: "Invalid token." });
  //     }
  //   } else {
  //     req.user = null;
  //     res.status(401).json({ message: "Access denied. You must login first." });
  //   }
};

module.exports = verifyToken;
