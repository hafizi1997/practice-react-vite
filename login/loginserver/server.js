const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();


app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));


const userRoutes = require("./routes/user");
app.use("/profile", userRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(8081, () => {
  console.log("Listening on port 8081");
});
