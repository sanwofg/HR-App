// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost:27017/HR-App")

//   .then(() => {
//     console.log("connected");
//   })
//   .catch(() => {
//     console.log("failed to connect");
//   });

// const newSchema = new mongoose.Schema({
//   msg: {
//     type: String,
//     required: true,
//   },
// });

// const collection = mongoose.model("collection", newSchema);

// module.exports = collection;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/HR_App", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: false,
  },
});

const collection = mongoose.model("Collection", newSchema);

module.exports = collection;
