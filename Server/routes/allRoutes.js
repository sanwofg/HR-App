const express = require("express");
const signup = require("../controllers/signUp");
const login = require("../controllers/login");
const email = require("../controllers/emailReset");
const resetPassword = require("../controllers/resetPassword");

const route = express.Router();

route.post("/api/users", signup);
route.post("/api/login", login);
route.post("/api/email", email);
route.put("/api/resetPassword", resetPassword);

module.exports = route;
