const express = require("express");
const { getSightings } = require("./utils.js");
require("dotenv").config();
var cors = require("cors");

const PORT = 3000;
const app = express();
app.use(cors());

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
