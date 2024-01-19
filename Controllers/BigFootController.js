// const { getSightings } = require("../utils.js");

class BigFootController {
  constructor() {
    const { getSightings } = require("../utils.js");
    this.sightings = getSightings();
  }

  list = (req, res) => {
    res.json(this.sightings);
  };

  listIndividual = (req, res) => {
    const individualSighting = this.sightings[req.params.sightingIndex];
    res.json(individualSighting);
  };
}

module.exports = BigFootController;
