// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;
// // const mongoose = require("mongoose");
// const connectMongoose = require("./services/connectMongoose");
// const routes = require("./routes/allRoutes");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// // mongoose.connect("mongodb://127.0.0.1:27017/HR_App");

// app.use(cors());

// app.use(cookieParser());

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());

// app.use(routes);

// app.post("/home", (req, res) => {
//   res.send("Naija 01 is life");
// });

// app.listen(PORT, async () => {
//   await connectMongoose();
//   console.log(`Server is listening on port ${PORT}`);
// });

const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const routes = require("./routes/allRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/HR_App");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Define individual Lambda handlers for each endpoint
app.post("/home", (req, res) => {
  res.send("Naija 01 is life");
});

// Wrap the app with serverless-http to create a Lambda handler
const lambdaHandler = serverless(app);

// Export the Lambda handler
module.exports.handler = async (event, context) => {
  // Call the Lambda handler with the event and context
  return await lambdaHandler(event, context);
};

// Start the server locally (optional)
if (!process.env.AWS_LAMBDA_FUNCTION_NAME) {
  app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}
