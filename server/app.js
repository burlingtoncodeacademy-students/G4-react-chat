const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const user = require("./routers/user.js");
const room = require("./routers/rooms.js");
const message = require("./routers/message.js");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

const mongoURI = process.env.MONGODB_URI;

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
