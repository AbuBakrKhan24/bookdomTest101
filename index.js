const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally
const nodemailer = require("nodemailer");
const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors

// import
const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const orderRoute = require("./routes/orderRoute");
const avatarRoute = require("./routes/avatarRoute");

// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome" });
// });

app.use("/users", userRoute);
app.use("/books", bookRoute);
app.use("/orders", orderRoute);
app.use("/avatars", avatarRoute);

app.listen(app.get("port"), () => {
  console.log(`Listening for calls on port ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
