"use strict";

// ~~~ 1. add path
const path = require("path"); // <<<<-----

const express = require("express");
const app = express();

// ~~~ 2. Add public dir
const dir = path.join(__dirname, "public"); // <<<<-----
app.use(express.static(dir)); // <<<<-----

app.get("/", (req, res) => {
  res.status(200).send("Hello, world2!");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
