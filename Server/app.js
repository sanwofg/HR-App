const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const routes = require("./routes/allRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/HR_App");

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(routes);

app.post("/home", (req, res) => {
  res.send("Naija 01 is life");
});

app.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
});
