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

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://izygabss:<password>@cluster1.pdgwodn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
