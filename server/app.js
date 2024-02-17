require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI); // This should output your MongoDB URI if it's being loaded correctly

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const user = require("./routers/user.js");
const room = require("./routers/rooms.js");
const message = require("./routers/message.js");

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.set("strictQuery", true);
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

//check browser response
app.get("/", (req, res) => {
  console.log("sdfsdff");
  res.send("it works!");
});
// Use the user routes with the base path '/users'
app.use("/user", user);

app.use("/room", room);

app.use("/message", message);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
