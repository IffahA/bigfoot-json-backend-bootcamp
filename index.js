const express = require("express");
const { getSightings } = require("./utils.js");
require("dotenv").config();
const cors = require("cors");

const PORT = 3000;
const app = express();
app.use(cors());

const BigFootRouter = require("./Routers/BigFootRouter.js");
const BigFootController = require("./Controllers/BigFootController.js");
const bigFootController = new BigFootController();
const bigFootRouter = new BigFootRouter(bigFootController, express);

//allows app to use JSON requests and use the body
app.use(express.json());

app.use("/sightings", bigFootRouter.route());

// retrieve all sightings
app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

//retrieve individual sightings data
app.get("/sightings/:sightingIndex", async (req, res) => {
  const sightings = await getSightings();
  const individualSighting = sightings[req.params.sightingIndex];
  res.json(individualSighting);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
